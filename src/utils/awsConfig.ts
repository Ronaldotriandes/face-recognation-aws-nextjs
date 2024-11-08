
import {IndexFacesCommand, RekognitionClient, SearchFacesByImageCommand} from '@aws-sdk/client-rekognition'

import config from '../../config';

const clientAws = new RekognitionClient({
    region: config.region, 
    credentials: {
        accessKeyId: config.credential.acessKey,
        secretAccessKey: config.credential.secretAccessKey,
    },
});

export const storeIndexAws = async (img: Buffer) => {
    try {
        const input = { // IndexFacesRequest
            CollectionId: config.collectionId,
            Image: { // Image
              Bytes: img, // e.g. Buffer.from("") or new TextEncoder().encode("")
            },
            ExternalImageId: "",
          };
        const com = new IndexFacesCommand(input)
        const response = await clientAws.send(com);
        return response
    } catch (error) {
        return error
    }
}


export const findImageByFace = async (img: Buffer) => {
    try {
        const command = new SearchFacesByImageCommand({
            CollectionId: config.collectionId,
            Image: {
                Bytes: img,
              },
        });        
        const response = await clientAws.send(command);
        return response
    } catch (error) {
        console.error('Error creating collection:', error);
        return error
    }
}