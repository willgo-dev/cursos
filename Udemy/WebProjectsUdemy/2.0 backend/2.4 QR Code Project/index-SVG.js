import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    // Generar el código QR en formato SVG
    const qr_svg = qr.image(url, { type: "svg" });

    // Leer el contenido generado por el stream del QR
    let svgString = "";
    qr_svg.on("data", (chunk) => {
      svgString += chunk.toString();
    });

    qr_svg.on("end", () => {
      // Modificar el SVG para que el fondo sea transparente y el contenido blanco
      const customizedSVG = svgString
        .replace(/fill="[^"]*"/g, 'fill="white"') // Cambiar el color negro del QR a blanco
        .replace(/<rect[^>]*>/, ""); // Eliminar el fondo (si existe)

      // Guardar el SVG personalizado en un archivo
      fs.writeFile("qr_img.svg", customizedSVG, (err) => {
        if (err) throw err;
        console.log("QR code without background and with white color saved as qr_img.svg!");
      });
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in this environment.");
    } else {
      console.error("An error occurred:", error);
    }
  });