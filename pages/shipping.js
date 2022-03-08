import React, {useContext} from 'react'
import {useRouter} from "next/router";
import {Store} from "../utils/context"

const ShippingPage = () => {
  const router = useRouter();
  const { state } = useContext(Store);
  const { userInfo } = state;
  if (!userInfo) {
    router.push('/login?redirect=/shipping');
  }

  return (
    <div>Shipping</div>
  )
}

export default ShippingPage