/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { BASE_ACCOUNT_SIZE } from '@solana/accounts';
import { Address, ProgramDerivedAddress } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getU32Decoder,
  getU32Encoder,
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { findAddressLookupTablePda } from '../pdas';
import {
  IInstructionWithByteDelta,
  ResolvedAccount,
  accountMetaWithDefault,
  expectAddress,
  expectProgramDerivedAddress,
  expectSome,
  getAccountMetasWithSigners,
} from '../shared';

export type CreateLookupTableInstruction<
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111',
  TAccountAddress extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
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
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts
    ]
  >;

export type CreateLookupTableInstructionWithSigners<
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111',
  TAccountAddress extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
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
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts
    ]
  >;

export type CreateLookupTableInstructionData = {
  discriminator: number;
  recentSlot: bigint;
  bump: number;
};

export type CreateLookupTableInstructionDataArgs = {
  recentSlot: number | bigint;
  bump: number;
};

export function getCreateLookupTableInstructionDataEncoder(): Encoder<CreateLookupTableInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU32Encoder()],
      ['recentSlot', getU64Encoder()],
      ['bump', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 0 })
  );
}

export function getCreateLookupTableInstructionDataDecoder(): Decoder<CreateLookupTableInstructionData> {
  return getStructDecoder([
    ['discriminator', getU32Decoder()],
    ['recentSlot', getU64Decoder()],
    ['bump', getU8Decoder()],
  ]);
}

export function getCreateLookupTableInstructionDataCodec(): Codec<
  CreateLookupTableInstructionDataArgs,
  CreateLookupTableInstructionData
> {
  return combineCodec(
    getCreateLookupTableInstructionDataEncoder(),
    getCreateLookupTableInstructionDataDecoder()
  );
}

export type CreateLookupTableAsyncInput<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string
> = {
  address?: ProgramDerivedAddress<TAccountAddress>;
  authority: Address<TAccountAuthority>;
  payer?: Address<TAccountPayer>;
  systemProgram?: Address<TAccountSystemProgram>;
  recentSlot: CreateLookupTableInstructionDataArgs['recentSlot'];
  bump?: CreateLookupTableInstructionDataArgs['bump'];
};

export type CreateLookupTableAsyncInputWithSigners<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string
> = {
  address?: ProgramDerivedAddress<TAccountAddress>;
  authority: TransactionSigner<TAccountAuthority>;
  payer?: TransactionSigner<TAccountPayer>;
  systemProgram?: Address<TAccountSystemProgram>;
  recentSlot: CreateLookupTableInstructionDataArgs['recentSlot'];
  bump?: CreateLookupTableInstructionDataArgs['bump'];
};

export async function getCreateLookupTableInstructionAsync<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111'
>(
  input: CreateLookupTableAsyncInputWithSigners<
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram
  >
): Promise<
  CreateLookupTableInstructionWithSigners<
    TProgram,
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram
  > &
    IInstructionWithByteDelta
>;
export async function getCreateLookupTableInstructionAsync<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111'
>(
  input: CreateLookupTableAsyncInput<
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram
  >
): Promise<
  CreateLookupTableInstruction<
    TProgram,
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram
  > &
    IInstructionWithByteDelta
>;
export async function getCreateLookupTableInstructionAsync<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111'
>(
  input: CreateLookupTableAsyncInput<
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram
  >
): Promise<IInstruction & IInstructionWithByteDelta> {
  // Program address.
  const programAddress =
    'AddressLookupTab1e1111111111111111111111111' as Address<'AddressLookupTab1e1111111111111111111111111'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getCreateLookupTableInstructionRaw<
      TProgram,
      TAccountAddress,
      TAccountAuthority,
      TAccountPayer,
      TAccountSystemProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    address: { value: input.address ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.address.value) {
    accounts.address.value = await findAddressLookupTablePda({
      authority: expectAddress(accounts.authority.value),
      recentSlot: expectSome(args.recentSlot),
    });
  }
  if (!accounts.payer.value) {
    accounts.payer.value = expectSome(accounts.authority.value);
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!args.bump) {
    args.bump = expectProgramDerivedAddress(accounts.address.value)[1];
  }

  // Bytes created or reallocated by the instruction.
  const byteDelta: number = [56 + BASE_ACCOUNT_SIZE].reduce((a, b) => a + b, 0);

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getCreateLookupTableInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as CreateLookupTableInstructionDataArgs,
    programAddress
  );

  return Object.freeze({ ...instruction, byteDelta });
}

export type CreateLookupTableInput<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string
> = {
  address: ProgramDerivedAddress<TAccountAddress>;
  authority: Address<TAccountAuthority>;
  payer?: Address<TAccountPayer>;
  systemProgram?: Address<TAccountSystemProgram>;
  recentSlot: CreateLookupTableInstructionDataArgs['recentSlot'];
  bump?: CreateLookupTableInstructionDataArgs['bump'];
};

export type CreateLookupTableInputWithSigners<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string
> = {
  address: ProgramDerivedAddress<TAccountAddress>;
  authority: TransactionSigner<TAccountAuthority>;
  payer?: TransactionSigner<TAccountPayer>;
  systemProgram?: Address<TAccountSystemProgram>;
  recentSlot: CreateLookupTableInstructionDataArgs['recentSlot'];
  bump?: CreateLookupTableInstructionDataArgs['bump'];
};

export function getCreateLookupTableInstruction<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111'
>(
  input: CreateLookupTableInputWithSigners<
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram
  >
): CreateLookupTableInstructionWithSigners<
  TProgram,
  TAccountAddress,
  TAccountAuthority,
  TAccountPayer,
  TAccountSystemProgram
> &
  IInstructionWithByteDelta;
export function getCreateLookupTableInstruction<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111'
>(
  input: CreateLookupTableInput<
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram
  >
): CreateLookupTableInstruction<
  TProgram,
  TAccountAddress,
  TAccountAuthority,
  TAccountPayer,
  TAccountSystemProgram
> &
  IInstructionWithByteDelta;
export function getCreateLookupTableInstruction<
  TAccountAddress extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111'
>(
  input: CreateLookupTableInput<
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram
  >
): IInstruction & IInstructionWithByteDelta {
  // Program address.
  const programAddress =
    'AddressLookupTab1e1111111111111111111111111' as Address<'AddressLookupTab1e1111111111111111111111111'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getCreateLookupTableInstructionRaw<
      TProgram,
      TAccountAddress,
      TAccountAuthority,
      TAccountPayer,
      TAccountSystemProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    address: { value: input.address ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.payer.value) {
    accounts.payer.value = expectSome(accounts.authority.value);
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!args.bump) {
    args.bump = expectProgramDerivedAddress(accounts.address.value)[1];
  }

  // Bytes created or reallocated by the instruction.
  const byteDelta: number = [56 + BASE_ACCOUNT_SIZE].reduce((a, b) => a + b, 0);

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getCreateLookupTableInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as CreateLookupTableInstructionDataArgs,
    programAddress
  );

  return Object.freeze({ ...instruction, byteDelta });
}

export function getCreateLookupTableInstructionRaw<
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111',
  TAccountAddress extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    address: TAccountAddress extends string
      ? Address<TAccountAddress>
      : TAccountAddress;
    authority: TAccountAuthority extends string
      ? Address<TAccountAuthority>
      : TAccountAuthority;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
  },
  args: CreateLookupTableInstructionDataArgs,
  programAddress: Address<TProgram> = 'AddressLookupTab1e1111111111111111111111111' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.address, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(
        accounts.systemProgram ??
          ('11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>),
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getCreateLookupTableInstructionDataEncoder().encode(args),
    programAddress,
  } as CreateLookupTableInstruction<
    TProgram,
    TAccountAddress,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram,
    TRemainingAccounts
  >;
}

export type ParsedCreateLookupTableInstruction<
  TProgram extends string = 'AddressLookupTab1e1111111111111111111111111',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    address: TAccountMetas[0];
    authority: TAccountMetas[1];
    payer: TAccountMetas[2];
    systemProgram: TAccountMetas[3];
  };
  data: CreateLookupTableInstructionData;
};

export function parseCreateLookupTableInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[]
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCreateLookupTableInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 4) {
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
      payer: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getCreateLookupTableInstructionDataDecoder().decode(instruction.data),
  };
}