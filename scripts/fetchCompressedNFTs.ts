import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { publicKey } from "@metaplex-foundation/umi";
import wallet from "../payer.json";

import dotenv from "dotenv";
import { dasApi } from "@metaplex-foundation/digital-asset-standard-api";

const umi = createUmi("https://devnet.helius-rpc.com/?api-key=ea771cf6-1e92-4e45-a2fc-e8bd8f6ae6a0").use(dasApi());

dotenv.config();

(async () => {
  const assetId = publicKey("3f88SUaUoFTWFZdrP1GwikRQ7FTg1d2AUtJugZL4pDLV");

  const asset = await umi.rpc.getAsset(assetId);
  console.log(asset);
})();
