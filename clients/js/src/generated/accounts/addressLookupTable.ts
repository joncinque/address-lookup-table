/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  EncodedAccount,
  FetchAccountConfig,
  FetchAccountsConfig,
  MaybeAccount,
  MaybeEncodedAccount,
  assertAccountExists,
  assertAccountsExist,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
} from '@solana/accounts';
import {
  Address,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  Option,
  OptionOrNullable,
  combineCodec,
  getArrayDecoder,
  getArrayEncoder,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU16Decoder,
  getU16Encoder,
  getU32Decoder,
  getU32Encoder,
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
  mapEncoder,
} from '@solana/codecs';
import { AddressLookupTableSeeds, findAddressLookupTablePda } from '../pdas';

export type AddressLookupTable<TAddress extends string = string> = Account<
  AddressLookupTableAccountData,
  TAddress
>;

export type MaybeAddressLookupTable<TAddress extends string = string> =
  MaybeAccount<AddressLookupTableAccountData, TAddress>;

export type AddressLookupTableAccountData = {
  discriminator: number;
  deactivationSlot: bigint;
  lastExtendedSlot: bigint;
  lastExtendedSlotStartIndex: number;
  authority: Option<Address>;
  padding: number;
  addresses: Array<Address>;
};

export type AddressLookupTableAccountDataArgs = {
  deactivationSlot: number | bigint;
  lastExtendedSlot: number | bigint;
  lastExtendedSlotStartIndex: number;
  authority: OptionOrNullable<Address>;
  addresses: Array<Address>;
};

export function getAddressLookupTableAccountDataEncoder(): Encoder<AddressLookupTableAccountDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU32Encoder()],
      ['deactivationSlot', getU64Encoder()],
      ['lastExtendedSlot', getU64Encoder()],
      ['lastExtendedSlotStartIndex', getU8Encoder()],
      ['authority', getOptionEncoder(getAddressEncoder(), { fixed: true })],
      ['padding', getU16Encoder()],
      [
        'addresses',
        getArrayEncoder(getAddressEncoder(), { size: 'remainder' }),
      ],
    ]),
    (value) => ({ ...value, discriminator: 1, padding: 0 })
  );
}

export function getAddressLookupTableAccountDataDecoder(): Decoder<AddressLookupTableAccountData> {
  return getStructDecoder([
    ['discriminator', getU32Decoder()],
    ['deactivationSlot', getU64Decoder()],
    ['lastExtendedSlot', getU64Decoder()],
    ['lastExtendedSlotStartIndex', getU8Decoder()],
    ['authority', getOptionDecoder(getAddressDecoder(), { fixed: true })],
    ['padding', getU16Decoder()],
    ['addresses', getArrayDecoder(getAddressDecoder(), { size: 'remainder' })],
  ]);
}

export function getAddressLookupTableAccountDataCodec(): Codec<
  AddressLookupTableAccountDataArgs,
  AddressLookupTableAccountData
> {
  return combineCodec(
    getAddressLookupTableAccountDataEncoder(),
    getAddressLookupTableAccountDataDecoder()
  );
}

export function decodeAddressLookupTable<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): AddressLookupTable<TAddress>;
export function decodeAddressLookupTable<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>
): MaybeAddressLookupTable<TAddress>;
export function decodeAddressLookupTable<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>
): AddressLookupTable<TAddress> | MaybeAddressLookupTable<TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getAddressLookupTableAccountDataDecoder()
  );
}

export async function fetchAddressLookupTable<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<AddressLookupTable<TAddress>> {
  const maybeAccount = await fetchMaybeAddressLookupTable(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeAddressLookupTable<
  TAddress extends string = string,
>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MaybeAddressLookupTable<TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeAddressLookupTable(maybeAccount);
}

export async function fetchAllAddressLookupTable(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<AddressLookupTable[]> {
  const maybeAccounts = await fetchAllMaybeAddressLookupTable(
    rpc,
    addresses,
    config
  );
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeAddressLookupTable(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MaybeAddressLookupTable[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) =>
    decodeAddressLookupTable(maybeAccount)
  );
}

export async function fetchAddressLookupTableFromSeeds(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  seeds: AddressLookupTableSeeds,
  config: FetchAccountConfig & { programAddress?: Address } = {}
): Promise<AddressLookupTable> {
  const maybeAccount = await fetchMaybeAddressLookupTableFromSeeds(
    rpc,
    seeds,
    config
  );
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeAddressLookupTableFromSeeds(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  seeds: AddressLookupTableSeeds,
  config: FetchAccountConfig & { programAddress?: Address } = {}
): Promise<MaybeAddressLookupTable> {
  const { programAddress, ...fetchConfig } = config;
  const [address] = await findAddressLookupTablePda(seeds, { programAddress });
  return fetchMaybeAddressLookupTable(rpc, address, fetchConfig);
}
