## Prerequisites
To complete this tutorial you will need:

- [NodeJS](https://nodejs.org/en/download)
- [A near testnet account](https://testnet.mynearwallet.com/)
- [NEAR CLI](https://docs.near.org/tools/near-cli#installation)

## Introduction

This guide assumes you already know how to build smart contracts on NEAR using the JS SDK.
If not, you can learn more with their [quick start guide](https://docs.near.org/build/smart-contracts/quickstart).

If you just need a template for creating fungible tokens, feel free to clone [the repository](https://github.com/Onihani/fungible-token-with-near-js-sdk) for this guide on github.

## Setting Up Development Environment
### Installation of Node.js and npm

Install NodeJS and NPM if you don't have them already.
At the time of writing, the latest stable version of Node is **v20.13.1**, but I used **v18.19.0**.
I recommend using this version or a later one if you are following this guide.

### Installing NEAR CLI for command-line interactions.

```bash
npm i -g near-cli
```

In your terminal, enter the command above.
This command uses npm to install the NEAR CLI globally on your system.
Check if the installation was successful with the command below:

```bash
near
```

This should display the usage options for the NEAR CLI, similar to the image below.

![](/writing/near-fungible-tokens/figure-01.png)

### Setting up a NEAR wallet for development purposes.

Now we need to set up a testnet account (a testnet wallet) to deploy our contract on the NEAR testnet.
To create a testnet account, use the command below:

```bash
near create-account username.testnet --useFaucet
```

The command above will create `username.testnet` on the NEAR testnet.
When running the command, **replace**`username` with the name you want to use on the testnet.
An example is shown in the image below.

![](/writing/near-fungible-tokens/figure-02.png)

Take note of the file where your key/credentials are saved after creating the account. It includes your:

- Account ID
- Public Key
- Private Key

We would use this details later.

### Creating a new NEAR project with NEAR JS SDK.

Now we are going to start a project with the NEAR JS SDK.

```bash
 npx create-near-app@latest
```

To start a project with the NEAR JS SDK, use the command above. You should see something similar to the image below.

![](/writing/near-fungible-tokens/figure-03.png)

From the options given, select **A Smart Contract**.

![](/writing/near-fungible-tokens/figure-04.png)

For the template for your project, select **JS/TS Contract**.

![](/writing/near-fungible-tokens/figure-05.png)

Choose a name for your project and install the dependencies.
If you have trouble using npm to install the dependencies, I recommend using [yarn](https://yarnpkg.com/).

![](/writing/near-fungible-tokens/figure-06.png)

After successfully setting up the project and installing dependencies, your project file/folder structure should look similar to the one shown in the image above.

## Understanding Fungible Tokens
### Fungible tokens and their characteristics

Fungible tokens are like identical coins or bills in your wallet. Each one has the same value, and you can trade them without worrying about which one you are giving or receiving.

In blockchain, fungible tokens work the same way. They're digital assets that can be swapped, with each token having the same value as any other token of its kind. This makes them perfect for representing currencies, rewards, or other types of value in blockchain apps.

Understanding fungible tokens is important for building applications on NEAR Protocol because they are the basic units for transactions and interactions within the network.

### Token Standards for Fungible Tokens on NEAR - NEP-141

Token standards, like NEP-141 for NEAR Protocol and ERC-20 for Ethereum, set rules for creating and managing tokens on their blockchains. Just as ERC-20 defines how tokens should work on Ethereum, NEP-141 sets similar rules for NEAR.

For example, ERC-20 specifies functions like `transfer` and `balanceOf` for moving tokens and checking balances. NEP-141 offers similar features for fungible tokens on NEAR.

Understanding these standards is important for developers because they provide a common set of rules for building token-based applications. They ensure that tokens can work smoothly across different platforms and services.

Here are the links to the standards:

- [NEP-141: Fungible Token Standard](https://nomicon.io/Standards/Tokens/FungibleToken)
- [ERC-20: Token Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-20)

By following these standards, developers can ensure their tokens follow best practices and easily work with existing infrastructure and services in their blockchain ecosystems.

## Designing the Fungible Token Contract
### Contract Architecture

From the [Fungible Token Standard](https://nomicon.io/Standards/Tokens/FungibleToken), fungible tokens have 3 main parts:

- [The Fungible Token Core - NEP-141 Standard](https://nomicon.io/Standards/Tokens/FungibleToken/Core)
- [The Token Metadata](https://nomicon.io/Standards/Tokens/FungibleToken/Metadata)
- [The Fungible Token Events](https://nomicon.io/Standards/Tokens/FungibleToken/Event)

There is also a general standard for all smart contracts on NEAR: [The Storage Management Standard](https://nomicon.io/Standards/StorageManagement)

### Storage Management For FTs

All NEAR contracts use the storage management standard to handle state storage. This standard uses storage staking, meaning a contract account must have enough balance to cover all storage added over time.

For fungible token contracts, users need to stake or deposit some NEAR to the contract to store their balance. This storage deposit acts like a registration for users. Without it, unregistered users cannot interact with the contract.

**Main Functions:**

- `storage_deposit`: Lets users deposit NEAR tokens to cover the storage costs of their account's data.
- `storage_balance_of`: Shows the storage balance for a specific account, indicating how much NEAR is reserved for storage costs.
- `storage_balance_bounds`: Provides the minimum and maximum amount of storage needed for the account, helping users understand the storage costs involved.

```typescript
import { NearBindgen, near, call, view, AccountId } from "near-sdk-js";

// types
/* 
  The `total` and `available` values are string representations of unsigned
  128-bit integers showing the balance of a specific account in yoctoⓃ.
*/
type StorageBalance = {
  total: string;
  available: string;
};
/* 
  Both `min` and `max` are string representations of unsigned 128-bit integers.
  min: The minimum storage balance required to interact with the contract.
  max: The maximum storage balance allowed to interact with the contract.
*/
type StorageBalanceBounds = {
  min: string;
  max: string | null;
};

type StorageBalanceOfArgs = {
  account_id: AccountId;
};

type StorageDepositArgs = {
  account_id?: AccountId;
  registration_only?: boolean;
};

@NearBindgen({})
class FungibleToken {
  /* 
    Payable method that receives an attached deposit of Ⓝ for a given account. 
    This will register the user on the contract. 
  */
  @call({ payableFunction: true })
  storage_deposit({
    account_id,
    registration_only,
  }: StorageDepositArgs): StorageBalance {
    // TODO: Implement storage_deposit for FungibleToken
  }

  /* 
    Returns the minimum and maximum allowed storage deposit required to 
    interact with the contract. In the FT contract's case, min = max. 
  */
  @view({})
  storage_balance_bounds(): StorageBalanceBounds {
    // TODO: Implement storage_balance_bounds for FungibleToken
  }

  /* 
    Returns the total and available storage paid by a given user. 
    In the FT contract's case, available is always 0 since it's used 
    by the contract for registration and you can't overpay for storage. 
  */
  @view({})
  storage_balance_of({
    account_id,
  }: StorageBalanceOfArgs): StorageBalance | null {
    // TODO: Implement storage_balance_of for FungibleToken
  }
}
```

The code above shows how to handle registration for fungible tokens according to the storage standard.

### Fungible Token Core - NEP-141

NEP-141 is the standard for fungible tokens on the NEAR Protocol, similar to ERC-20 on Ethereum. It sets rules and interfaces that tokens must follow to ensure they work consistently and can interact with each other within the NEAR ecosystem.

**Main Functions**

- `ft_transfer`: Transfer tokens from the sender’s account to another account.
- `ft_transfer_call`: Transfer tokens and execute a receiving contract’s callback.
- `ft_balance_of`: Get the balance of a specified account.
- `ft_total_supply`: Returns the total supply of the token.

The code below represents the core logic that allows you to transfer FTs between users and query important information.

```typescript
import { 
    NearBindgen, 
    near, 
    call, 
    view, 
    AccountId, 
    Balance ,
    PromiseOrValue,
} 
from "near-sdk-js";

// types
type Nullable<T> = T | null;

type FungibleTokenMetadata = {
  spec: string; // Should be ft-1.0.0 to indicate that a Fungible Token contract adheres to the current versions of this Metadata and the Fungible Token Core specs. This will allow consumers of the Fungible Token to know if they support the features of a given contract.
  name: string; // The human-readable name of the token.
  symbol: string; // The abbreviation, like wETH or AMPL.
  icon: string; // Icon of the fungible token.
  reference?: Nullable<string>; // A link to a valid JSON file containing various keys offering supplementary details on the token
  reference_hash?: Nullable<string>; // The base64-encoded sha256 hash of the JSON file contained in the reference field. This is to guard against off-chain tampering.
  decimals: number; // used in frontends to show the proper significant digits of a token. This concept is explained well in this OpenZeppelin post. https://docs.openzeppelin.com/contracts/3.x/erc20#a-note-on-decimals
};

type FTTransferArgs = {
  receiver_id: AccountId;
  amount: Balance;
  memo?: string;
};

type FTTransferCallArgs = {
  receiver_id: AccountId;
  amount: Balance;
  memo?: string;
  msg: string;
};

type FTTotalSupplyArgs = {};

export type FTBalanceOfArgs = {
  account_id: AccountId;
};

type FTResolveTransferArgs = {
  sender_id: AccountId;
  receiver_id: AccountId;
  amount: Balance;
};

@NearBindgen({})
class FungibleToken {
  @view({})
  ft_metadata(): FungibleTokenMetadata {
    // Return the metadata of the token
  }

  @view({})
  ft_total_supply(): bigint {
    // Return the total supply of the token
  }

  @view({})
  ft_balance_of({ account_id }: FTBalanceOfArgs): bigint {
    // Return the balance of the account_id
  }

  @call({ payableFunction: true })
  ft_transfer({ receiver_id, amount, memo }: FTTransferArgs) {
    // Add functionality to transfer tokens from one account to another
  }

  @call({ payableFunction: true })
  ft_transfer_call({
    receiver_id,
    amount,
    memo,
    msg,
  }: FTTransferCallArgs): PromiseOrValue<bigint> {
    // Add functionality to transfer tokens from one account to another via cross contract call
  }

  @call({ privateFunction: true })
  ft_resolve_transfer({
    sender_id,
    receiver_id,
    amount,
  }: FTResolveTransferArgs): bigint {
    // Implement resolve transfer
    /*
    Invoked after the ft_on_transfer is finished executing. 
    This function will refund any FTs not used by the receiver contract 
    and will return the net number of FTs sent to the receiver after the
    refund (if any).
    */
  }
}
```

### Token Metadata

Fungible tokens on NEAR can have metadata that gives information about the token. This metadata helps users and apps recognize and show tokens correctly.

**Metadata Fields:**

- `spec`: A string showing the version of the fungible token standard (e.g., `"ft-1.0.0"`).
- `name`: The name of the token (e.g., `"Justin Case Token"`).
- `symbol`: A short ticker symbol for the token (e.g., `"JCT"`).
- `decimals`: The number of decimal places the token uses, showing the smallest unit (e.g., `18` for 18 decimal places).
- `icon`: A data URL for a small image linked to the token. It's best to use optimized SVG for high resolution and low storage cost. The icon should look good in both light and dark modes.
- `reference`: A URL to a JSON file with more token metadata. This file has extra details about the token.
- `reference_hash`: A base64-encoded SHA-256 hash of the JSON file from the `reference` URL, ensuring data integrity and preventing off-chain tampering.

**Metadata Structure:**

```json
{
  "spec": "ft-1.0.0",
  "name": "Justin Case Token",
  "symbol": "JCT",
  "decimals": 18,
  "icon": "data:image/svg+xml;base64,...", // optimized SVG data URL
  "reference": "https://example.com/token-metadata.json",
  "reference_hash": "Gz8OT6IqBL9KnF1wRrRCiQwfbn0="
}
```

### Token Events

Events are a key part of fungible tokens on NEAR Protocol. They help track and log important actions and changes in token contracts. This allows external systems, like user interfaces and analytics tools, to react to changes in a consistent and efficient way.

**Common Events:**

- `ft_transfer`: Happens when tokens are moved between accounts. This event usually includes details like the sender, receiver, and the amount of tokens transferred.
- `ft_mint`: Happens when new tokens are created. This event includes information about the recipient and the amount of new tokens.
- `ft_burn`: Happens when tokens are destroyed. This event logs details about the account from which the tokens were burned and the amount destroyed.

**Example Event Data:**

```json
{
  "standard": "nep141",
  "version": "1.0.0",
  "event": "ft_transfer",
  "data": [
    {
      "old_owner_id": "onihani.near",
      "new_owner_id": "justin-case.near",
      "amount": "1000"
    }
  ]
}
```

## Building the Fungible Token Contract
Now that we understand the ins and outs of fungible tokens, let's start building one.

### Project File/Folder Structure

Open the project you started in VSCode or your preferred text editor.
In the `src` directory, create a file named `lib.ts` and a folder named `common`.
In the `common` folder, create four files:

- `helpers.ts` - for helper functions
- `models.ts` - for classes used to emit events
- `types.ts` - for TypeScript types
- `constants.ts` - for storing common constant values

If you did everything right, the files in your `src` folder should look like the image below.

![](/writing/near-fungible-tokens/figure-07.png)

Also, in your `tsconfig.json`, include the `lib.ts` file in the list of files to be compiled.
The code snippet below shows how to do this:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "target": "ES5",
    "noEmit": true,
    "noImplicitAny": false,
  },
  "files": [
    "sandbox-ts/main.ava.ts",
    "src/contract.ts",
    "src/lib.ts",
  ],
  "exclude": [
    "node_modules"
  ],
}
```

### Adding Types to the Project

Now that we have set up our file and folder structure, let's add TypeScript types for the methods of our contract class.
In the `types.ts` file in the `common` directory, add the following code::

```typescript
import { AccountId, Balance, StorageUsage } from "near-sdk-js";

// custom
export type Nullable<T> = T | null;

export type FTMintArgs = {
  accountId: AccountId,
  amount: Balance;
  memo?: string;
} 

export type FTBurnArgs = {
  accountId?: AccountId,
  amount: Balance;
  memo?: string;
}

// metadata
export type FungibleTokenMetadata = {
  spec: string; // Should be ft-1.0.0 to indicate that a Fungible Token contract adheres to the current versions of this Metadata and the Fungible Token Core specs. This will allow consumers of the Fungible Token to know if they support the features of a given contract.
  name: string; // The human-readable name of the token.
  symbol: string; // The abbreviation, like wETH or AMPL.
  icon: string; // Icon of the fungible token.
  reference?: Nullable<string>; // A link to a valid JSON file containing various keys offering supplementary details on the token
  reference_hash?: Nullable<string>; // The base64-encoded sha256 hash of the JSON file contained in the reference field. This is to guard against off-chain tampering.
  decimals: number; // used in frontends to show the proper significant digits of a token. This concept is explained well in this OpenZeppelin post. https://docs.openzeppelin.com/contracts/3.x/erc20#a-note-on-decimals
};

// storage
export type StorageBalance = {
  total: StorageUsage,
  available: StorageUsage,
}

export type StorageBalanceBounds = {
  min: StorageUsage;
  max?: StorageUsage;
};

export type StorageBalanceOfArgs = {
  account_id: AccountId;
};

export type StorageDepositArgs = {
  account_id?: AccountId;
  registration_only?: boolean;
};

// lib
export type NewArgs = {
  owner_id: AccountId;
  total_supply?: Balance;
  metadata: FungibleTokenMetadata;
};

export type NewDefaultMetaArgs = {
  owner_id: AccountId;
  total_supply?: Balance;
};

// ft-core
export type FTTransferArgs = {
  receiver_id: AccountId;
  amount: Balance;
  memo?: string;
};

export type FTTransferCallArgs = {
  receiver_id: AccountId;
  amount: Balance;
  memo?: string;
  msg: string;
};

export type FTTotalSupplyArgs = {};

export type FTBalanceOfArgs = {
  account_id: AccountId;
};

export type FTResolveTransferArgs = {
  sender_id: AccountId;
  receiver_id: AccountId;
  amount: Balance;
};

// internal
export type InternalDepositArgs = {
  account_id: AccountId;
  amount: Balance;
};

export type InternalWithdrawArgs = {
  account_id: AccountId;
  amount: Balance;
};

export type InternalTransferArgs = {
  sender_id: AccountId;
  receiver_id: AccountId;
  amount: Balance;
  memo?: string;
};

export type InternalUnwrapBalanceOfArgs = {
  account_id: AccountId;
};

// Events 
export enum FTEventKind {
  mint = "ft_mint",
  burn = "ft_burn",
  transfer = "ft_transfer",
  transfer_call = "ft_transfer_call",
  resolve_transfer = "ft_resolve_transfer",
}

export type EVENTJSON = {
  standard: "nep141";
  version: "1.0.0";
  event: FTEventKind;
  data: Array<Record<string, string>>;
};

export type FTTransferEventData = {
  sender_id: AccountId;
  receiver_id: AccountId;
  amount: Balance;
  memo?: string;
};
```

The types above are for:

- Custom Methods
- Events
- Internal Methods
- Storage Management
- Fungible Token Core - Nep 141
- Metadata
- etc.

### Adding Helper Methods

Now let's add helper functions that we will use soon.
In the `helpers.ts` file in the `common` directory, add the following code:

```typescript
import { PromiseIndex, near } from "near-sdk-js";

export function encodeNonStringFields(
  data: Record<string, any>
): Record<string, string> {
  const encodedData: Record<string, string> = {};

  for (const [key, value] of Object.entries(data)) {
    encodedData[key] = String(value);
  }

  return encodedData;
}

export function promiseResult(): { result?: string; success: boolean } {
  let result: string | undefined, success: boolean;

  try {
    result = near.promiseResult(0 as PromiseIndex);
    success = true;
  } catch {
    result = undefined;
    success = false;
  }

  return { result, success };
}

export function findMinValue(...numbers: bigint[]): bigint {
  return numbers.reduce(
    (min, current) => (current < min ? current : min),
    numbers[0]
  );
}
```

The helper functions are for:

- `encodeNonStringFields` - encodes non-string fields in the data for our event models.
- `promiseResult` - gets the status and result of NEAR promises or cross-contract callbacks. Read more on [near promises](https://docs.near.org/build/smart-contracts/anatomy/crosscontract) and [cross-contract callbacks](https://docs.near.org/sdk/js/cross-contract/callbacks).
- `findMinValue` - finds the smallest value from a list of bigints.

### Adding Constants

Now that we have our helper functions ready, let's add the constants to our project.
In the `constants.ts` file in the `common` directory, add the code below:

```typescript
import { Balance, Gas, ONE_TERA_GAS } from "near-sdk-js";

// types
import { FungibleTokenMetadata } from "./types";

export const DATA_IMAGE_SVG_FT_ICON =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZCQzM0RTt9Cgkuc3Qxe2ZpbGw6I0U1QTUzMzt9Cgkuc3Qye2ZpbGw6I0U0RURGMjt9Cjwvc3R5bGU+PGcgaWQ9IlRva2VuIj48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYsMkM4LjI4LDIsMiw4LjI4LDIsMTZzNi4yOCwxNCwxNCwxNHMxNC02LjI4LDE0LTE0UzIzLjcyLDIsMTYsMnogTTE2LDI2Yy01LjUxNCwwLTEwLTQuNDg2LTEwLTEwICAgIFMxMC40ODYsNiwxNiw2czEwLDQuNDg2LDEwLDEwUzIxLjUxNCwyNiwxNiwyNnoiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTYsNkMxMC40ODYsNiw2LDEwLjQ4Niw2LDE2czQuNDg2LDEwLDEwLDEwczEwLTQuNDg2LDEwLTEwUzIxLjUxNCw2LDE2LDZ6IE0yMC4yNDQsMTcuMjcybC0xLjE1LDAuNjI2ICAgIGMtMC41MDQsMC4yNzUtMC45MTcsMC42ODctMS4xOTMsMS4xOWwtMC42MzEsMS4xNDZjLTAuMjU1LDAuNDY0LTAuNzQxLDAuNzUxLTEuMjcsMC43NTFzLTEuMDE1LTAuMjg4LTEuMjctMC43NTFsLTAuNjMtMS4xNDcgICAgYy0wLjI3Ny0wLjUwNC0wLjY5LTAuOTE2LTEuMTk1LTEuMTkxbC0xLjE0OC0wLjYyNUMxMS4yODksMTcuMDE5LDExLDE2LjUzMSwxMSwxNnMwLjI4OS0xLjAxOSwwLjc1Ni0xLjI3MmwxLjE1LTAuNjI2ICAgIGMwLjUwNC0wLjI3NSwwLjkxNy0wLjY4NywxLjE5My0xLjE5bDAuNjMxLTEuMTQ2YzAuMjU1LTAuNDY0LDAuNzQxLTAuNzUxLDEuMjctMC43NTFzMS4wMTUsMC4yODgsMS4yNywwLjc1MWwwLjYzLDEuMTQ3ICAgIGMwLjI3NywwLjUwMywwLjY5LDAuOTE1LDEuMTk0LDEuMTlsMS4xNDksMC42MjVDMjAuNzExLDE0Ljk4MSwyMSwxNS40NjksMjEsMTZTMjAuNzExLDE3LjAxOSwyMC4yNDQsMTcuMjcyeiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yMC4yNDMsMTQuNzI3bC0xLjE0OS0wLjYyNWMtMC41MDQtMC4yNzUtMC45MTctMC42ODctMS4xOTQtMS4xOWwtMC42My0xLjE0NyAgICBjLTAuMjU1LTAuNDYzLTAuNzQxLTAuNzUxLTEuMjctMC43NTFzLTEuMDE1LDAuMjg4LTEuMjcsMC43NTFsLTAuNjMsMS4xNDZjLTAuMjc2LDAuNTA0LTAuNjg5LDAuOTE2LTEuMTkzLDEuMTlsLTEuMTUsMC42MjYgICAgQzExLjI4OSwxNC45ODEsMTEsMTUuNDY5LDExLDE2czAuMjg5LDEuMDE5LDAuNzU3LDEuMjczbDEuMTQ4LDAuNjI1YzAuNTA1LDAuMjc1LDAuOTE4LDAuNjg3LDEuMTk1LDEuMTkxbDAuNjMsMS4xNDcgICAgYzAuMjU1LDAuNDYzLDAuNzQxLDAuNzUxLDEuMjcsMC43NTFjMC41MjksMCwxLjAxNS0wLjI4OCwxLjI3LTAuNzUxbDAuNjMxLTEuMTQ2YzAuMjc2LTAuNTA0LDAuNjg5LTAuOTE2LDEuMTkzLTEuMTlsMS4xNS0wLjYyNiAgICBDMjAuNzExLDE3LjAxOSwyMSwxNi41MzEsMjEsMTZTMjAuNzExLDE0Ljk4MSwyMC4yNDMsMTQuNzI3eiIvPjwvZz48L2c+PC9zdmc+";

export const THIRTY_TGAS: Gas = BigInt(30) * ONE_TERA_GAS;

export const THREE_HUNDRED_TGAS: Gas = BigInt(300) * ONE_TERA_GAS;

export const GAS_FOR_FT_TRANSFER_CALL: Gas = THIRTY_TGAS;

export const GAS_FOR_RESOLVE_TRANSFER: Gas = THIRTY_TGAS;

export const NO_DEPOSIT: Balance = BigInt(0);

export const DEFAULT_METADATA: FungibleTokenMetadata = {
  spec: "ft-1.0.0",
    name: "Justin Case Fungible Token",
    symbol: "JC-FT",
    icon: DATA_IMAGE_SVG_FT_ICON,
    reference: null,
    reference_hash: null,
    decimals: 18,
}
```

The constants above are for:

- **default metadata** - for our fungible token
- constants for **GAS fees**

### Adding Event Models

Now let's add the models for emitting events in our contract.
In the `models.ts` file in the `common` directory, add the following code:

```typescript
import { near } from "near-sdk-js";

// helpers
import { encodeNonStringFields } from "./helpers";

// types
import {
  EVENTJSON,
  FTEventKind,
  FTBurnArgs,
  FTMintArgs,
  FTTransferEventData,
} from "./types";

export class NearEvent {
  private static toJSONString(event: EVENTJSON): string {
    return JSON.stringify(event);
  }

  private static toJSONEventString(event: EVENTJSON): string {
    return `EVENT_JSON:${this.toJSONString(event)}`;
  }

  public static emit(event: EVENTJSON): void {
    near.log(this.toJSONEventString(event));
  }
}

export class NearNep141Event {
  public static emit(eventDetails: {
    type: FTEventKind;
    data: Array<Record<string, any>>;
  }) {
    NearEvent.emit({
      standard: "nep141",
      version: "1.0.0",
      event: eventDetails.type,
      data: eventDetails.data.map((record) => encodeNonStringFields(record)),
    });
  }
}

export class FTMintEvent {
  public static emit(data: FTMintArgs) {
    this.emitMany([data]);
  }

  public static emitMany(data: Array<FTMintArgs>) {
    NearNep141Event.emit({
      type: FTEventKind.mint,
      data,
    });
  }
}

export class FTTransferEvent {
  public static emit(data: FTTransferEventData) {
    this.emitMany([data]);
  }

  public static emitMany(data: Array<FTTransferEventData & {}>) {
    NearNep141Event.emit({
      type: FTEventKind.transfer,
      data,
    });
  }
}

export class FTBurnEvent {
  public static emit(data: FTBurnArgs) {
    this.emitMany([data]);
  }

  public static emitMany(data: Array<FTBurnArgs>) {
    NearNep141Event.emit({
      type: FTEventKind.burn,
      data,
    });
  }
}
```

The code above uses classes to create models that can emit events in our fungible token contract according to the [events standard](https://nomicon.io/Standards/Tokens/FungibleToken/Event) for fungible tokens.

### Setting Up Contract State And Internal Functions

Now that we have set up the files in our common directory that the contract depends on, let's add the state and other internal methods.
In the `lib.ts` file in the `src` directory, add the following code:

```typescript
import {
  NearBindgen,
  AccountId,
  Balance,
  LookupMap,
  StorageUsage,
  assert,
  near,
} from "near-sdk-js";

// models
import { FTTransferEvent } from "./common/models";

// constants
import { DEFAULT_METADATA } from "./common/constants";

// types
import {
  FungibleTokenMetadata,
  InternalDepositArgs,
  InternalTransferArgs,
  InternalUnwrapBalanceOfArgs,
  InternalWithdrawArgs,
} from "./common/types";

@NearBindgen({})
export class ContractLibrary {
  /* ==== State ==== */
  // Keep track of FT contract owner
  ownerId: AccountId = "";
  // Keep track of each account's balances
  accounts: LookupMap<Balance> = new LookupMap<Balance>("accounts");
  // Total supply of all tokens.
  total_supply: Balance = BigInt(0);
  // The bytes for the largest possible account ID that can be registered on the contract
  bytes_for_longest_account_id: StorageUsage = BigInt(0);
  // Metadata for the contract itself
  metadata: FungibleTokenMetadata = DEFAULT_METADATA;

  /* INTERNAL FUNCTIONS */
  internal_deposit({ account_id, amount }: InternalDepositArgs) {
    //  Get the current balance of the account.  If they're not registered, panic.
    const balance = this.internal_unwrap_balance_of({ account_id });

    // Add the amount to the balance
    const new_balance = balance + BigInt(amount);

    // insert the new balance into the accounts map
    // TODO: in the future check for balance overflow errors before depositing
    this.accounts.set(account_id, new_balance);
  }

  internal_withdraw({ account_id, amount }: InternalWithdrawArgs) {
    // Get the current balance of the account. If they're not registered, panic.
    const balance = this.internal_unwrap_balance_of({ account_id });

    // Ensure the account has enough balance to withdraw
    assert(balance >= amount, "The account doesn't have enough balance");

    // Subtract the amount from the balance
    const new_balance = balance - BigInt(amount);

    // Insert the new balance into the accounts map
    this.accounts.set(account_id, new_balance);
  }

  internal_transfer({
    sender_id,
    receiver_id,
    amount,
    memo,
  }: InternalTransferArgs) {
    // Ensure the sender can't transfer to themselves
    assert(sender_id != receiver_id, "Sender and receiver should be different");
    // Ensure the sender can't transfer 0 tokens
    assert(amount > BigInt(0), "The amount should be a positive number");

    // Withdraw from the sender and deposit into the receiver
    this.internal_withdraw({ account_id: sender_id, amount });
    this.internal_deposit({ account_id: receiver_id, amount });

    // Emit the transfer event
    FTTransferEvent.emit({ sender_id, receiver_id, amount, memo });
  }

  // Internal method for registering an account with the contract.
  internal_register_account({ account_id }: { account_id: AccountId }): void {
    if (this.accounts.containsKey(account_id)) {
      throw new Error("The account is already registered.");
    }
    // Register the account with a balance of 0
    this.accounts.set(account_id, BigInt(0));
  }

  // Internal method for force getting the balance of an account. If the account doesn't have a balance, panic with a custom message.
  internal_unwrap_balance_of({
    account_id,
  }: InternalUnwrapBalanceOfArgs): Balance {
    const balance = this.accounts.get(account_id);
    if (balance == null) {
      throw new Error(`The account ${account_id} is not registered.`);
    }
    return balance;
  }

  measure_bytes_for_longest_account_id() {
    let initialStorageUsage = near.storageUsage();
    let tmpAccountId = "a".repeat(64);
    this.accounts.set(tmpAccountId, BigInt(0));
    this.bytes_for_longest_account_id =
      near.storageUsage() - initialStorageUsage;
    this.accounts.remove(tmpAccountId);
  }
}

export default ContractLibrary;
```

The code above sets up the state for our contract and includes some internal functions for managing storage and following fungible token core standards.

### The Token Contract

Now that we have set up the state and internal functions in our contract library class, let's add the logic for the token contract itself, including storage management and fungible token standards.

In the `contract.ts` file in the `src` directory, add the following code:

```typescript
// Find all our documentation at https://docs.near.org
import {
  NearBindgen,
  near,
  call,
  view,
  assert,
  initialize,
  LookupMap,
  Balance,
  NearPromise,
  ONE_YOCTO,
  PromiseOrValue,
} from "near-sdk-js";

// lib
import ContractLibrary from "./lib";

// models
import { FTMintEvent, FTBurnEvent } from "./common/models";

// constants
import {
  GAS_FOR_FT_TRANSFER_CALL,
  GAS_FOR_RESOLVE_TRANSFER,
  NO_DEPOSIT,
} from "./common/constants";

// helpers
import { findMinValue, promiseResult } from "./common/helpers";

// types
import {
  FTBalanceOfArgs,
  FTBurnArgs,
  FTMintArgs,
  FTResolveTransferArgs,
  FTTransferArgs,
  FTTransferCallArgs,
  FungibleTokenMetadata,
  NewArgs,
  NewDefaultMetaArgs,
  Nullable,
  StorageBalance,
  StorageBalanceBounds,
  StorageBalanceOfArgs,
  StorageDepositArgs,
} from "./common/types";

@NearBindgen({})
class Contract extends ContractLibrary {
  @initialize({})
  init({
    owner_id = near.signerAccountId(),
    total_supply = BigInt(0),
    metadata,
  }: NewArgs) {
    // Initialize the token with the owner_id as the owner
    this.ownerId = owner_id;
    this.metadata = metadata;
    this.total_supply = BigInt(total_supply);
    this.accounts = new LookupMap<Balance>("accounts");

    // Measure the bytes for the longest account ID and store it in the contract.
    this.measure_bytes_for_longest_account_id();

    // Register the owner's account and set their balance to the total supply.
    this.internal_register_account({ account_id: owner_id });
    this.internal_deposit({ account_id: owner_id, amount: total_supply });

    // Emit an event showing that the FTs were minted
    FTMintEvent.emit({
      accountId: owner_id,
      amount: total_supply,
      memo: "Initial token supply is minted",
    });
  }

  @initialize({})
  init_default_meta({ owner_id, total_supply }: NewDefaultMetaArgs) {
    // Initialize the token with the owner_id as the owner and default metadata
    this.init({
      owner_id,
      total_supply,
      metadata: this.metadata,
    });
  }

  /* STORAGE MANAGEMENT */
  @view({})
  storage_balance_bounds(): StorageBalanceBounds {
    // Calculate the required storage balance by taking the bytes for the longest account ID and multiplying by the current byte cost
    let requiredStorageBalance =
      this.bytes_for_longest_account_id * near.storageByteCost();

    // Storage balance bounds will have min == max == requiredStorageBalance
    return {
      min: requiredStorageBalance,
      max: requiredStorageBalance,
    };
  }

  @view({})
  storage_balance_of({
    account_id,
  }: StorageBalanceOfArgs): Nullable<StorageBalance> {
    // Get the storage balance of the account. Available will always be 0 since you can't overpay for storage.
    if (this.accounts.containsKey(account_id)) {
      return {
        total: this.storage_balance_bounds().min,
        available: BigInt(0),
      };
    } else {
      return null;
    }
  }

  @call({ payableFunction: true })
  storage_deposit({
    account_id,
    registration_only,
  }: StorageDepositArgs): Nullable<StorageBalance> {
    // Get the amount of $NEAR to deposit
    const amount = near.attachedDeposit();
    // If an account was specified, use that. Otherwise, use the predecessor account.
    let accountId = account_id ?? near.predecessorAccountId();

    // If the account is already registered, refund the deposit.
    if (this.accounts.containsKey(accountId)) {
      near.log("The account is already registered, refunding the deposit.");
      if (amount > BigInt(0)) {
        NearPromise.new(accountId).transfer(amount);
      }
    } else {
      // Register the account and refund any excess $NEAR
      // Get the minimum required storage and ensure the deposit is at least that amount
      const min_balance = this.storage_balance_bounds().min;

      if (amount < min_balance) {
        throw new Error(
          "The attached deposit is less than the minimum storage balance"
        );
      }

      // Register the account
      this.internal_register_account({ account_id: accountId });

      // Perform a refund
      const refund = amount - min_balance;
      if (refund > BigInt(0)) {
        NearPromise.new(accountId).transfer(refund);
      }
    }

    // Return the storage balance of the account
    return {
      total: this.storage_balance_bounds().min,
      available: BigInt(0),
    };
  }

  /* FT CORE */
  @view({})
  ft_metadata(): FungibleTokenMetadata {
    // Return the metadata of the token
    return this.metadata;
  }

  @view({})
  ft_total_supply(): bigint {
    // Return the total supply of the token
    return this.total_supply;
  }

  @view({})
  ft_balance_of({ account_id }: FTBalanceOfArgs): bigint {
    // Return the balance of the account_id
    return this.accounts.get(account_id, { defaultValue: BigInt(0) });
  }

  @call({ payableFunction: true })
  ft_transfer({ receiver_id, amount, memo }: FTTransferArgs) {
    // Assert that the user attached exactly 1 yoctoNEAR. This is for security and so that the user will be required to sign with a FAK.
    assert(near.attachedDeposit() == ONE_YOCTO, "1 yoctoNEAR must be attached");
    // The sender is the user who called the method
    const sender_id = near.predecessorAccountId();
    // How many tokens the user wants to withdraw
    const amt = amount;
    // Transfer the tokens
    this.internal_transfer({ sender_id, receiver_id, amount: amt, memo });
  }

  @call({ payableFunction: true })
  ft_transfer_call({
    receiver_id,
    amount,
    memo,
    msg,
  }: FTTransferCallArgs): PromiseOrValue<bigint> {
    // Assert that the user attached exactly 1 yoctoNEAR. This is for security and so that the user will be required to sign with a FAK.
    assert(near.attachedDeposit() == ONE_YOCTO, "1 yoctoNEAR must be attached");
    // The sender is the user who called the method
    const sender_id = near.predecessorAccountId();
    // How many tokens the user wants to withdraw
    const amt = amount;
    // Transfer the tokens
    this.internal_transfer({ sender_id, receiver_id, amount: amt, memo });

    // Initiating receiver's call and the callback
    // Defaulting GAS weight to 1, no attached deposit, and static GAS equal to the GAS for ft transfer call.
    const promise = NearPromise.new(receiver_id)
      .functionCall(
        "ft_on_transfer",
        JSON.stringify({
          sender_id,
          amount: amt,
          msg,
        }),
        NO_DEPOSIT,
        GAS_FOR_FT_TRANSFER_CALL
      )
      .then(
        NearPromise.new(near.currentAccountId()).functionCall(
          "ft_resolve_transfer",
          JSON.stringify({
            sender_id,
            receiver_id,
            amount: amt,
          }),
          NO_DEPOSIT,
          GAS_FOR_RESOLVE_TRANSFER
        )
      );

    return promise.asReturn();
  }

  @call({ privateFunction: true })
  ft_resolve_transfer({
    sender_id,
    receiver_id,
    amount,
  }: FTResolveTransferArgs): bigint {
    const amt = BigInt(amount);

    // Get the unused amount from the `ft_on_transfer` call result.
    const { result, success } = promiseResult();

    let unused_amount = amt;

    // If the call was successful, get the return value and cast it to a U128
    if (success) {
      // If we can properly parse the value, the unused amount is equal to whatever is smaller - the unused amount or the original amount (to prevent malicious contracts)
      unused_amount =
        result != null ? findMinValue(amt, BigInt(JSON.parse(result))) : amt;
    } else {
      // If the promise wasn't successful, return the original amount.
      unused_amount = amt;
    }

    // If there is some unused amount, we should refund the sender
    if (unused_amount > BigInt(0)) {
      // Get the receiver's balance. We can only refund the sender if the receiver has enough balance.
      const receiver_balance = this.accounts.get(receiver_id, {
        defaultValue: BigInt(0),
      });

      near.log("receiver balance", unused_amount);

      if (receiver_balance > BigInt(0)) {
        // The amount to refund is the smaller of the unused amount and the receiver's balance as we can only refund up to what the receiver currently has.
        const refund_amount = findMinValue(unused_amount, receiver_balance);

        // Refund the sender for the unused amount
        this.internal_transfer({
          sender_id: receiver_id,
          receiver_id: sender_id,
          amount: refund_amount,
          memo: "Refund from ft_transfer_call",
        });

        // Return what was actually used (the amount sent - refund)
        const used_amount = amt - refund_amount;
        return used_amount;
      }
    }

    // Return the amount that was actually used
    return amt;
  }

  /* CUSTOM METHODS */
  @view({})
  name() {
    return this.metadata.name;
  }

  @view({})
  owner() {
    return this.ownerId;
  }

  @view({})
  symbol() {
    return this.metadata.symbol;
  }

  @view({})
  decimals() {
    return this.metadata.decimals;
  }

  @call({})
  mint({ accountId, amount, memo }: FTMintArgs) {
    // Assert that the caller is the owner
    assert(
      near.predecessorAccountId() == this.ownerId,
      "Only the owner can mint tokens"
    );

    // Mint the tokens
    this.internal_deposit({ account_id: accountId, amount });

    // increase the total supply
    this.total_supply += BigInt(amount);

    // Emit the mint event
    FTMintEvent.emit({ accountId, amount, memo });
  }

  @call({})
  burn({ amount, memo }: FTBurnArgs) {
    // Assert that the caller is the account holder
    assert(
      near.predecessorAccountId() == near.signerAccountId() &&
        this.accounts.containsKey(near.signerAccountId()),
      "Only the account holder can burn tokens"
    );

    // Burn the tokens
    this.internal_withdraw({ account_id: near.signerAccountId(), amount });

    // decrease the total supply
    this.total_supply -= BigInt(amount);

    // Emit the burn event
    FTBurnEvent.emit({ accountId: near.signerAccountId(), amount, memo });
  }
}
```

The code above is an example of a fungible token contract that follows storage management, ft-core, and event standards. You can change it to fit your fungible token needs.

### Testing The Contract

For this guide, I have already written some tests for the contract. In your `main.ava.ts` file in the `sandbox-ts` directory, add the code below.

```typescript
import { Worker, NearAccount } from "near-workspaces";
import anyTest, { TestFn } from "ava";
import { setDefaultResultOrder } from "dns";
import { AccountId } from "near-sdk-js";
setDefaultResultOrder("ipv4first"); // temp fix for node >v17

// types
import {
  FungibleTokenMetadata,
  Nullable,
  StorageBalance,
  StorageBalanceBounds,
} from "../src/common/types";

// Global context
const test = anyTest as TestFn<{
  worker: Worker;
  accounts: Record<string, NearAccount>;
}>;

test.beforeEach(async (t) => {
  // Create sandbox, accounts, deploy contracts, etc.
  const worker = (t.context.worker = await Worker.init());

  // Deploy contract
  const root = worker.rootAccount;
  const contract = await root.createSubAccount("test-account");
  const account1 = await root.createSubAccount("account1");
  const account2 = await root.createSubAccount("account2");

  // Get wasm file path from package.json test script in folder above
  await contract.deploy(process.argv[2]);

  // initialize the fungible token contract
  await root.call(contract, "init_default_meta", {});

  // Save state for test runs, it is unique for each test
  t.context.accounts = { root, contract, account1, account2 };
});

test.afterEach.always(async (t) => {
  // Stop Sandbox server
  await t.context.worker.tearDown().catch((error) => {
    console.log("Failed to stop the Sandbox:", error);
  });
});

test("returns the default metadata", async (t) => {
  const { contract } = t.context.accounts;
  const metadata: FungibleTokenMetadata = await contract.view(
    "ft_metadata",
    {}
  );
  t.is(metadata.spec, "ft-1.0.0");
  t.is(metadata.name, "Justin Case Fungible Token");
  t.is(metadata.symbol, "JC-FT");
  t.is(metadata.decimals, 18);
});

test("sets root account id as contract owner", async (t) => {
  const { root, contract } = t.context.accounts;
  const ownerId: AccountId = await contract.view("owner", {});
  t.is(ownerId, root.accountId);
});

test("should return the storage balance bounds", async (t) => {
  const { contract } = t.context.accounts;
  const bounds: StorageBalanceBounds = await contract.view(
    "storage_balance_bounds",
    {}
  );
  t.true(bounds.min > 0);
});

test("should register an account with storage deposit", async (t) => {
  const { root, contract } = t.context.accounts;
  const accountId = root.accountId;

  // get the storage balance bounds
  const storageBounds: StorageBalanceBounds = await contract.view(
    "storage_balance_bounds",
    {}
  );

  await root.call(
    contract,
    "storage_deposit",
    { account_id: accountId },
    {
      attachedDeposit: storageBounds.min.toString(),
    }
  );
  const storageBalance: Nullable<StorageBalance> = await contract.view(
    "storage_balance_of",
    {
      account_id: accountId,
    }
  );
  t.true(storageBalance.total >= BigInt(storageBounds.min));
});

test("should be able to mint tokens", async (t) => {
  const { root, contract } = t.context.accounts;

  const accountId = root.accountId;

  // get the storage balance bounds
  const storageBounds: StorageBalanceBounds = await contract.view(
    "storage_balance_bounds",
    {}
  );

  // register the root account
  await root.call(
    contract,
    "storage_deposit",
    { account_id: accountId },
    {
      attachedDeposit: storageBounds.min.toString(),
    }
  );

  const amount = "100";
  await root.call(contract, "mint", { accountId, amount });
  const balance: string = await contract.view("ft_balance_of", {
    account_id: accountId,
  });
  t.is(balance, amount);
});

test("should be able to transfer tokens", async (t) => {
  const { root, contract, account1 } = t.context.accounts;

  const accountId = root.accountId;
  const account1Id = account1.accountId;

  // get the storage balance bounds
  const storageBounds: StorageBalanceBounds = await contract.view(
    "storage_balance_bounds",
    {}
  );

  // register the root account
  await root.call(
    contract,
    "storage_deposit",
    { account_id: accountId },
    {
      attachedDeposit: storageBounds.min.toString(),
    }
  );

  // register the alice account
  await account1.call(
    contract,
    "storage_deposit",
    { account_id: account1Id },
    {
      attachedDeposit: storageBounds.min.toString(),
    }
  );

  const amount = "100";
  const transferAmount = "40";
  await root.call(contract, "mint", { accountId, amount });
  await root.call(
    contract,
    "ft_transfer",
    {
      receiver_id: account1Id,
      amount: transferAmount,
      memo: "test transfer",
    },
    {
      attachedDeposit: "1",
    }
  );
  const account1Balance: string = await contract.view("ft_balance_of", {
    account_id: account1Id,
  });
  const rootBalance: string = await contract.view("ft_balance_of", {
    account_id: accountId,
  });

  t.is(account1Balance, transferAmount);
  t.is(rootBalance, "60");
});
```

The above tests check the following:

- **Test 1:** Checks if the contract returns the default fungible token metadata.
- **Test 2:** Confirms that the root account is set as the contract owner.
- **Test 3:** Ensures the contract returns the storage balance bounds.
- **Test 4:** Tests if an account can be registered with a storage deposit.
- **Test 5:** Verifies the ability to mint tokens.
- **Test 6:** Tests the successful transfer of tokens between accounts.

Run the tests with `npm run test` in your terminal.

```bash
npm run test
```

You should see an output like the one in the image below:

![](/writing/near-fungible-tokens/figure-08.png)

Don't forget to add tests for any custom functionality you have added.

### Deploying The Contract

For this guide, we will deploy on testnet.
Before deploying, let's create a sub-account of our main account and deploy the contract on the sub-account.

To create a sub-account, use the command below:

```bash
near create-account ft.username.testnet --useAccount username.testnet --networkId testnet
```

Where `username` is the name of your main account.
If you did everything correctly, you should see something like the image below:

![](/writing/near-fungible-tokens/figure-09.png)

Now that we have the sub-account for our token ready, let's deploy the contract to it.

Before we deploy the contract, we need to build it. Build the contract with the command below:

```bash
npm run build
```

If everything goes well, you should see something like the image below.

![](/writing/near-fungible-tokens/figure-10.png)

Now that the contract is built, let's deploy it.

```bash
near deploy ft.username.testnet path-to-build-web-assembly-file.wasm
```

If you get an error about insufficient balance, send some NEAR from your main account to the sub-account and try again.
You can get some NEAR from the [NEAR testnet faucet](https://near-faucet.io/) to fund transactions and deployments.

If everything goes well, you should see something like the image below.

![](/writing/near-fungible-tokens/figure-11.png)

Look up the address of the contract (the sub-account) you created on the [near testnet explorer](https://testnet.nearblocks.io/) and interact with the contract.

### Bonus

Make sure to initialize the contract with the `init` or `init_default_meta` methods before doing anything else.

- Try minting some tokens with the `mint` method.
- Register a new account on the token contract using the `storage_deposit` method.
- Try transferring some tokens to the new account with the `ft_transfer` method.

After this, you should see your token listed in your [near testnet wallet](https://testnet.mynearwallet.com/). Like in the image below:

![](/writing/near-fungible-tokens/figure-12.png)

Happy Hacking!!!
