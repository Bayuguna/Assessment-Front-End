import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Button from "../../components/atoms/Button";
import TextInput from "../../components/molecules/TextInputVertical";
import useProduct from "../../../repository/hook/productHook";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

interface DialogUpdateProductProps {
  show: boolean;
  onClickYes?: any;
  onClicCancel?: any;
  data?: any;
}


export function DialogUpdateProduct (props: DialogUpdateProductProps) {
  const { show, onClicCancel, data} = props;

  const {setUpdateProduct, handleUpdateProduct} = useProduct()

  return (
    <Dialog
      fullWidth
      maxWidth={"xs"}
      scroll={"paper"}
      open={show}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>
        <div className="flex flex-row justify-between">
              <div>
              Product
              </div>
          <div>
            <XMarkIcon className="w-5 h-5 text-gray-500" onClick={onClicCancel} />
          </div>
        </div>
      </DialogTitle>
        <DialogContent>
          <div className="flex flex-col space-y-5">
          <div>
                  <TextInput
                  className="w-full"
                  type="text"
                  text="Product Image"
                  placeholder="URL File"
                  value={data?.image}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdateProduct({...data, image: e.target.value})}
                  />
              </div>
            <div>
                  <TextInput
                  className="w-full"
                  type="text"
                  text="Product Name"
                  placeholder="Product Name"
                  value={data?.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdateProduct({...data, name: e.target.value})}
                  />
              </div>
              <div>
                  <TextInput
                  className="w-full"
                  type="text"
                  text="Product Description"
                  placeholder="Product Description"
                  value={data?.description}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdateProduct({...data, description: e.target.value})}
                  />
              </div>
              <div>
                  <TextInput
                  className="w-full"
                  type="text"
                  text="Product Price"
                  placeholder="Product Price"
                  value={data?.price}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdateProduct({...data, price: e.target.value})}
                  />
              </div>
              <div>
                  <TextInput
                  className="w-full"
                  type="number"
                  text="Product Stock"
                  placeholder="Product Stock"
                  value={data?.stock}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdateProduct({...data, stock: e.target.value})}
                  />
              </div>
              <div>
              <Button
              type="submit"
              className="rounded-lg w-full"
                size="small"
                style="danger-hover"
                onClick={handleUpdateProduct}
              >
                Submit
              </Button>
              </div>
          </div>
        </DialogContent>
        {/* <DialogActions>
          <Button size="small" onClick={onClicCancel}>
            Cancel
          </Button>
          <Button
          type="submit"
          className="rounded-lg"
            size="small"
            style="danger-hover"
            onClick={onClickYes}
          >
            Yes
          </Button>
      </DialogActions> */}
    </Dialog>
  );
}
