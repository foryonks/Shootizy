const fs = require("fs");
const DomParser = require("dom-parser");
const path = require("path");
const argv = require("yargs").argv;
const rootDir = "./";
const packageJson = require("../package.json");
const iconsJsonDestFile = path.resolve(rootDir, packageJson.icons.jsonFilePath);
const svgPath = path.resolve(rootDir, packageJson.icons.svgFolder);
const watch = require("node-watch");

console.log("start icon to json task");

function convert() {
  let parser = new DomParser();

  let svgIcons = {};
  fs.readdirSync(svgPath)
    .filter(filename => /\.svg$/.test(filename))
    .forEach(function(filename) {
      let fileContent = fs.readFileSync(path.join(svgPath, filename), "utf8");
      let dom = parser.parseFromString(fileContent);
      let svg = dom.getElementsByTagName("svg")[0];

      var polys = svg.querySelectorAll("polygon,polyline");
      [].forEach.call(polys, convertPolyToPath);

      if (!svg) return null;
      let viewBox = svg.getAttribute("viewBox");
      let paths = Array.prototype.slice
        .call(svg.getElementsByTagName("path"))
        .map(function(path) {
          const attrObj = {};
          path.attributes.forEach(function(attr) {
            if (["data-name", "fill-rule"].indexOf(attr.name) == -1) {
              attrObj[attr.name] = attr.value;
            }
          });
          return attrObj;
        })
        .filter(function(svg) {
          return svg != null;
        });

      let obj = {
        name: filename.replace(/\.svg$/, ""),
        paths: paths,
        viewBox: viewBox,
      };
      svgIcons[obj.name] = obj;
    });

  fs.writeFileSync(iconsJsonDestFile, JSON.stringify(svgIcons, null, 2), {
    encoding: "utf8",
  });
  console.log("conversion done");
}

if (argv.watch) {
  watch(svgPath, { recursive: true }, function(evt, name) {
    console.log("Icons svg watch start conversion");
    convert();
  });
} else {
  convert();
}

function convertPolyToPath(poly) {
  var svgNS = poly.ownerSVGElement.namespaceURI;
  var path = document.createElementNS(svgNS, "path");
  var points = poly.getAttribute("points").split(/\s+|,/);
  var x0 = points.shift(),
    y0 = points.shift();
  var pathdata = "M" + x0 + "," + y0 + "L" + points.join(" ");
  if (poly.tagName == "polygon") pathdata += "z";
  path.setAttribute("d", pathdata);
  poly.parentNode.replaceChild(path, poly);
}
