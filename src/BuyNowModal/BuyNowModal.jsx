/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className="w-full px-4 py-3 text-center text-white bg-anu-primary border border-transparent hover:bg-anu-dark rounded-xl transition-all duration-300 ease-in-out shadow-lg hover:shadow-anu-primary/30"
      >
        Buy now
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-anu-light backdrop-blur-sm"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -20 },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        <DialogBody className="p-6">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={addressInfo.name}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  name: e.target.value
                })
              }}
              placeholder='Enter your name'
              className='bg-anu-light border border-anu-primary/20 px-3 py-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-anu-primary focus:border-transparent text-anu-dark placeholder-anu-primary/50 transition-all duration-200'
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="address"
              value={addressInfo.address}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  address: e.target.value
                })
              }}
              placeholder='Enter your address'
              className='bg-anu-light border border-anu-primary/20 px-3 py-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-anu-primary focus:border-transparent text-anu-dark placeholder-anu-primary/50 transition-all duration-200'
            />
          </div>

          <div className="mb-4">
            <input
              type="number"
              name="pincode"
              value={addressInfo.pincode}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  pincode: e.target.value
                })
              }}
              placeholder='Enter your pincode'
              className='bg-anu-light border border-anu-primary/20 px-3 py-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-anu-primary focus:border-transparent text-anu-dark placeholder-anu-primary/50 transition-all duration-200'
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              name="mobileNumber"
              value={addressInfo.mobileNumber}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  mobileNumber: e.target.value
                })
              }}
              placeholder='Enter your mobile number'
              className='bg-anu-light border border-anu-primary/20 px-3 py-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-anu-primary focus:border-transparent text-anu-dark placeholder-anu-primary/50 transition-all duration-200'
            />
          </div>

          <div>
            <Button
              type="button"
              onClick={() => {
                handleOpen();
                buyNowFunction();
              }}
              className="w-full px-4 py-3 text-center text-white bg-gradient-to-r from-anu-primary to-anu-secondary hover:from-anu-dark hover:to-anu-secondary border border-transparent rounded-lg shadow-md hover:shadow-lg transition-all duration-300 "
            >
              Buy now
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default BuyNowModal;