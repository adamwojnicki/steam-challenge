import { createClient } from "@supabase/supabase-js";

const apikey = process.env.API_KEY;
const Authorization = process.env.AUTH_KEY;
export default createClient(
  "https://gqkuommdmfzmwkzdewma.supabase.co",
  apikey,
  {
    headers: {
      Authorization,
    },
  }
);
