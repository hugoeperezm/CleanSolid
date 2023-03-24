(() => {

    type Gender = 'M'|'F';

  /*  Forma 1: Larga
   class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor(name: string, gender: Gender, birthdate: Date){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    } */

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}
    }


    const newPerson = new Person('Hugo', 'M', new Date('1968-06-18'))
    console.log({ newPerson });
})();