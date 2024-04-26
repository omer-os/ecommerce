import React from "react";
import UpdateStoreForm from "~/components/custom/forms/update-store-form";
import { getStoreInformation } from "~/server/actions/store";

export default async function Page() {
  const stores = await getStoreInformation();
  const store = stores[0];

  return (
    <div className="w-full">
      <UpdateStoreForm store={store} />
    </div>
  );
}
