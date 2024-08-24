/**
 * Import function triggers from their respective submodules:
 *
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
*
* See a full list of supported triggers at https://firebase.google.com/docs/functions
*/

import * as functions from 'firebase-functions';

import { onCall, onRequest } from "firebase-functions/v2/https";

import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});

export const sumTwoNums = functions.https.onCall((data, context) => {
    const { a, b } = data;
    const sum = a + b;
    return { result: sum };
});

export const subtractTwoNums = functions.https.onCall((data, context) => {
    const { a, b } = data;
    const sum = a - b;
    return { result: sum };
});
export const multipyTwoNums = functions.https.onCall((data, context) => {
    const { a, b } = data;
    const sum = a * b;
    return { result: sum };
});
export const divideTwoNums = functions.https.onCall((data, context) => {
    const { a, b } = data;
    const sum = a / b;
    return { result: sum };
});
