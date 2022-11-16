export type Contact = {
    full_name?: string;
    cell_number?: string;
    email?: string;
    address?: string;
};

export function matchContact(lines: string[]) {
    var contact = {} as Contact;
    lines.filter(line => line.length > 0).forEach(line => {
        console.log(contact);
        if (!contact.address) {
            contact.address = matchAddress(line).next().value;
        }
        if (!contact.cell_number) {
            contact.cell_number = matchCellNumber(line).next().value;
        }
        if (!contact.email) {
            contact.email = matchEmail(line).next().value;
        }
        if (!contact.full_name) {
            // contact.full_name = matchFullName(line).next().value;
        }
    });
    let together = lines.filter(line => line.length > 0).join(" ");
    if (!contact.address) {
        contact.address = matchAddress(together).next().value;
    }
    if (!contact.cell_number) {
        contact.cell_number = matchCellNumber(together).next().value;
    }
    if (!contact.email) {
        contact.email = matchEmail(together).next().value;
    }
    return contact;
}

export function matchCellNumber(str: string) {
    return str.matchAll(/[\+\(]?[1-9][0-9 .\-\(\)]{8,}[0-9]/g);
}

export function matchEmail(str: string) {
    return str.matchAll(/'[\w\.-]+@[\w\.-]+/g);
}

export function matchAddress(str: string) {
    return str.matchAll(/^(\\d{1,}) [a-zA-Z0-9\\s]+(\\.)? [a-zA-Z0-9\\s]+(\\.)? [a-zA-Z]+(\\,)? [a-zA-Z]{1,} [0-9]{5,6}$/g);
}

export function matchFullName(str: string) {
    // return str.matchAll(/(?P\w+) (?P\w+)/g);
    return "";
}
