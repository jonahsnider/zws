import type {Static} from '@sinclair/typebox';
import {Type} from '../utils/typebox.js';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const LongUrl = Type.Object(
	{
		url: Type.String({maxLength: 500, format: 'uri', example: 'https://jonahsnider.com'}),
	},
	{$id: 'LongUrl', title: 'LongUrl', description: 'A long URL'},
);

export type LongUrl = Static<typeof LongUrl>;
