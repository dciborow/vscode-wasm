/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import { parentPort  } from 'worker_threads';
import { ServiceConnection } from '../../main';
import type { Requests } from '../connection.test';

if (parentPort === null) {
	process.exit();
}

const connection = new ServiceConnection<Requests>(parentPort);
connection.onRequest('varUint8array', () => {
	return { errno: 0, data: new Uint8Array(32) };
});
connection.signalReady();