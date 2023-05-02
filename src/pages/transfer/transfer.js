import { getAccountList, updateTransfer } from "./transfer.api";
import { history } from "../../core/router";
import { onSetError, 
    onUpdateField, 
    onSubmitForm, 
    onSetFormErrors,
} from "../../common/helpers";
import { setAccountOptions } from "./transfer.helpers";
import { formValidation } from "./transfer.validations";
import { mapTransferAccVmtoApi } from "./transfer.mappers";

const params = history.getParams();
const isEditMode = Boolean(params.id);

let transfer = {
    id: '',
    sourceAccount: '',
    iban: '',
    name: '',
    amount: '',
    concept: '',
    notes: '',
    day: '',
    month: '',
    year: '',
    date: '',
    email: '',
};

if (isEditMode) {
    getAccountList(params.id).then(accounts => {
        setAccountOptions(accounts);
    })
} else {
    getAccountList().then(accounts => {
        setAccountOptions(accounts);
    })
};

onUpdateField('select-account', event => {
    console.log(event)
    const value = event.target.value;
    transfer = { ...transfer, sourceAccount: value };
});

onUpdateField('iban', event => {
    const value = event.target.value;
    transfer = { ...transfer, iban: value };

    formValidation.validateField('iban', transfer.iban).then(result => {
        onSetError('iban', result);
    });
});

onUpdateField('name', event => {
    const value = event.target.value;
    transfer = { ...transfer, name: value };

    formValidation.validateField('name', transfer.name).then(result => {
        onSetError('name', result);
    });
});

onUpdateField('amount', event => {
    const value = event.target.value;
    transfer = { ...transfer, amount: value };

    formValidation.validateField('amount', transfer.amount).then(result => {
        onSetError('amount', result);
    });
});

onUpdateField('concept', event => {
    const value = event.target.value;
    transfer = { ...transfer, concept: value };

    formValidation.validateField('concept', transfer.concept).then(result => {
        onSetError('concept', result);
    });
});

onUpdateField('notes', event => {
    const value = event.target.value;
    transfer = { ...transfer, notes: value };
});

onUpdateField('day', event => {
    const value = event.target.value;
    transfer = { ...transfer, day: value };

    formValidation.validateField('day', transfer.day).then(result => {
        onSetError('day', result);
    });
});

onUpdateField('month', event => {
    const value = event.target.value;
    transfer = { ...transfer, month: value };

    formValidation.validateField('month', transfer.month).then(result => {
        onSetError('month', result);
    });
});

onUpdateField('year', event => {
    const value = event.target.value;
    transfer = { ...transfer, year: value };

    formValidation.validateField('year', transfer.year).then(result => {
        onSetError('year', result);
    });
});

onUpdateField('email', event => {
    const value = event.target.value;
    transfer = { ...transfer, email: value };

    formValidation.validateField('email', transfer.email).then(result => {
        onSetError('email', result);
    });
});

onSubmitForm('transfer-button', () => {
    formValidation.validateForm(transfer).then(result => {
        onSetFormErrors(result);
        if(result.succeeded) {
            const apiAcc = mapTransferAccVmtoApi(transfer);
            updateTransfer(apiAcc).then(response => {
                alert("transferencia realizada con éxito");
            });
        }
    });
});