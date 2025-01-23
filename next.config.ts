import { createCivicAuthPlugin } from "@civic/auth/nextjs"
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withCivicAuth = createCivicAuthPlugin({
  clientId: "1aa523d3-d80b-4b72-a081-523c5e1a0771"
});

export default withCivicAuth(nextConfig)