export const mapMovementListFromApiToVm = movementList => {
    return movementList.map(mov => mapMovementListApitoVm(mov));
};

const mapMovementListApitoVm = movement => {
    return {
        transaction: new Date(movement.transaction).toLocaleDateString(),
        realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
        description: movement.description,
        amount: `${movement.amount} €`,
        balance: `${movement.balance} €`,
    }
};

export const mapAccountInfoApitiVm = acc => {
    return {
        balance: `${acc.balance} €`,
        iban: acc.iban,
        alias: acc.name,
    }
};