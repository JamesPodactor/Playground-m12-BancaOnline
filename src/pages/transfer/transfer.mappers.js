export const mapTransferAccVmtoApi = acc => {
    return{
        id: acc.id,
        sourceAccount: acc.sourceAccount,
        iban: acc.iban,
        name: acc.name,
        amount: acc.amount,
        concept: acc.concept,
        notes: acc.notes,
        day: acc.day,
        month: acc.month,
        year: acc.year,
        email: acc.email,
    }
};