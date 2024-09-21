# Brainy qr Code Generator

This project is a command-line QR Code generator built using [inquirer](https://www.npmjs.com/package/inquirer) for interactive user input and [qr-image](https://www.npmjs.com/package/qr-image) for generating the QR code.
It is completely personal and open-source project and can be used for any purpose!

## ✨ Features

- 🖥️ **Command-line interface** for generating QR codes
- 🔧 **Customizable input** from the user
- 🖼️ **Generates PNG image files** of the QR codes and put it into the `node-output` directory

## 🛠️ Technologies

- **Node.js**: Backend runtime environment
- **Inquirer**: Used for prompting user input
- **QR-Image**: Generates the QR code in PNG format

## 📦 Installation

To install and use this project, follow the steps below:

Install the dependencies:

    ```bash
    npm install
    ```

## 🚀 Usage

1. Run the command to start the QR code generator:

   ```bash
   node index.js
   ```

2. You will be prompted to enter the text or URL for which you want to generate the QR code.
3. The program will generate a PNG file with the QR code in node-output directory.

## 📝 Example

```bash
? Enter the text or URL for the QR code: https://example.com
QR code generated successfully: qrcode.png
```

## 📖 Dependencies

- **inquirer**: `npm install inquirer`
- **qr-image**: `npm install qr-image`
