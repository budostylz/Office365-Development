export { };

console.log('Hello World');

function welcomePerson(person: Person): string {
    console.log(`Hey ${person.firstName} ${person.lastName}`);
    return `Hey ${person.firstName} ${person.lastName}`;
}

const james = {
    firstName: "James",
    lastName: "Quick"
}

welcomePerson(james);

interface Person {
    firstName: string,
    lastName: string
}