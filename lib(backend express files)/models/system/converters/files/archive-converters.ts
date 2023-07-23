import fs from 'fs';

import { createExtractorFromData } from 'node-unrar-js';
import AdmZip from 'adm-zip';

// Function to convert RAR to ZIP
async function convertRarToZip (rarFilePath: string, outputZipPath: string): Promise<void> {
    await new Promise((resolve, reject) => {
    // Extract RAR contents
        const rarExtractor = createExtractorFromData({ data: fs.readFileSync(rarFilePath) });
        rarExtractor
            .then((extractor) => {
                // Create a new ZIP archive
                const zip = new AdmZip();

                // Add the extracted files to the ZIP archive
                [...extractor.extract().files].forEach((file) => {
                    console.log(file.fileHeader.name, typeof file.extraction);
                    if (file.extraction !== undefined) {
                        zip.addFile(file.fileHeader.name, Buffer.from(file.extraction));
                    }
                });

                // Save the ZIP archive
                zip.writeZip(outputZipPath);
            })
            .catch((error) => {
                console.log(error);
            });
    });
}

void convertRarToZip('C:\\Users\\Phantom\\Downloads\\setup.rar', 'setup.zip');
