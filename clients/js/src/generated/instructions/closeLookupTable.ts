/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
  mapEncoder,
} from '@solana/codecs';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

export type CloseLookupTableInstruction<
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111',
  TAccountAddress extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountRecipient extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAddress extends string
        ? WritableAccount<TAccountAddress>
        : TAccountAddress,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority,
      TAccountRecipient extends string
        ? WritableAccount<TAccountRecipient>
        : TAccountRecipient,
      ...TRemainingAccounts
    ]
  >;

export type CloseLookupTableInstructionWithSigners<
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111',
  TAccountAddress extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountRecipient extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAddress extends string
        ? WritableAccount<TAccountAddress>
        : TAccountAddress,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountRecipient extends string
        ? WritableAccount<TAccountRecipient>
        : TAccountRecipient,
      ...TRemainingAccounts
    ]
  >;

export type CloseLookupTableInstructionData = { discriminator: number };

export type CloseLookupTableInstructionDataArgs = {};

export function getCloseLookupTableInstructionDataEncoder(): Encoder<CloseLookupTableInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([['discriminator', getU32Encoder()]]),
    (value) => ({ ...value, discriminator: 4 })
  );
}

export function getCloseLookupTableInstructionDataDecoder(): Decoder<CloseLookupTableInstructionData> {
  return getStructDecoder([['discriminator', getU32Decoder()]]);
}

export function getCloseLookupTableInstructionDataCodec(): Codec<
  CloseLookupTableInstructionDataArgs,
  CloseLookupTableInstructionData
> {
  return combineCodec(
    getCloseLookupTableInstructionDataEncoder(),
    getCloseLookupTableInstructionDataDecoder()
  );
}

export type CloseLookupTableInput<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountRecipient extends string
> = {
  address: Address<TAccountAddress>;
  authority: Address<TAccountAuthority>;
  recipient: Address<TAccountRecipient>;
};

export type CloseLookupTableInputWithSigners<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountRecipient extends string
> = {
  address: Address<TAccountAddress>;
  authority: TransactionSigner<TAccountAuthority>;
  recipient: Address<TAccountRecipient>;
};

export function getCloseLookupTableInstruction<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountRecipient extends string,
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111'
>(
  input: CloseLookupTableInputWithSigners<
    TAccountAddress,
    TAccountAuthority,
    TAccountRecipient
  >
): CloseLookupTableInstructionWithSigners<
  TProgram,
  TAccountAddress,
  TAccountAuthority,
  TAccountRecipient
>;
export function getCloseLookupTableInstruction<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountRecipient extends string,
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111'
>(
  input: CloseLookupTableInput<
    TAccountAddress,
    TAccountAuthority,
    TAccountRecipient
  >
): CloseLookupTableInstruction<
  TProgram,
  TAccountAddress,
  TAccountAuthority,
  TAccountRecipient
>;
export function getCloseLookupTableInstruction<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountRecipient extends string,
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111'
>(
  input: CloseLookupTableInput<
    TAccountAddress,
    TAccountAuthority,
    TAccountRecipient
  >
): IInstruction {
  // Program address.
  const programAddress =
    'AddressLookupTab1e1111111111111111111111111' as Address<'AddressLookupTab1e1111111111111111111111111'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getCloseLookupTableInstructionRaw<
      TProgram,
      TAccountAddress,
      TAccountAuthority,
      TAccountRecipient
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    address: { value: input.address ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
    recipient: { value: input.recipient ?? null, isWritable: true },
  };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getCloseLookupTableInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress
  );

  return instruction;
}

export function getCloseLookupTableInstructionRaw<
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111',
  TAccountAddress extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountRecipient extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    address: TAccountAddress extends string
      ? Address<TAccountAddress>
      : TAccountAddress;
    authority: TAccountAuthority extends string
      ? Address<TAccountAuthority>
      : TAccountAuthority;
    recipient: TAccountRecipient extends string
      ? Address<TAccountRecipient>
      : TAccountRecipient;
  },
  programAddress: Address<TProgram> = 'AddressLookupTab1e1111111111111111111111111' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.address, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(accounts.recipient, AccountRole.WRITABLE),
      ...(remainingAccounts ?? []),
    ],
    data: getCloseLookupTableInstructionDataEncoder().encode({}),
    programAddress,
  } as CloseLookupTableInstruction<
    TProgram,
    TAccountAddress,
    TAccountAuthority,
    TAccountRecipient,
    TRemainingAccounts
  >;
}

export type ParsedCloseLookupTableInstruction<
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    address: TAccountMetas[0];
    authority: TAccountMetas[1];
    recipient: TAccountMetas[2];
  };
  data: CloseLookupTableInstructionData;
};

export function parseCloseLookupTableInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[]
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCloseLookupTableInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 3) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      address: getNextAccount(),
      authority: getNextAccount(),
      recipient: getNextAccount(),
    },
    data: getCloseLookupTableInstructionDataDecoder().decode(instruction.data),
  };
}
