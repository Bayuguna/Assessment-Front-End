import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import Button from "../../components/atoms/Button";

interface DialogConfirmBuyProps {
  show: boolean;
  onClickYes?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClicCancel?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export function DialogConfirmBuy (props: DialogConfirmBuyProps) {
  const { show, onClickYes, onClicCancel } = props;
  return (
    <Dialog
      fullWidth
      maxWidth={"xs"}
      scroll={"paper"}
      open={show}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>Are you sure want to Buy This ?</DialogTitle>
        <DialogActions>
          <Button size="small" onClick={onClicCancel}>
            Cancel
          </Button>
          <Button
          className="rounded-lg"
            size="small"
            style="danger-hover"
            onClick={onClickYes}
          >
            Yes
          </Button>
      </DialogActions>
    </Dialog>
  );
}
