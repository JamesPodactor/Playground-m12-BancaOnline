import { getMovementList, getMovementById, getAccountInfo } from "./movements.api";
import { addMovementRows } from "./movements.helpers";
import { mapMovementListFromApiToVm,mapAccountInfoApitiVm } from "./movements.mappers";
import { onSetValues } from "../../common/helpers";
import { history } from "../../core/router";

const params = history.getParams();
const isAccount = Boolean(params.id);

if (isAccount) {
    getMovementById(params.id).then(apiMov => {
        movement = mapMovementListFromApiToVm(apiMov);
        addMovementRows(movement);
    });
        getAccountInfo(params.id).then(apiAcc => {
            const accountInfo = mapAccountInfoApitiVm(apiAcc);
            onSetValues(accountInfo);
    });
} else {
    getMovementList().then(movementList => {
        const vMMovementList = mapMovementListFromApiToVm(movementList);
        addMovementRows(vMMovementList);
    });
}
