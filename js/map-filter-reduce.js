const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//----------------------------.filter--------------------------------//
//     Use .filter to create an array of user objects where each user
//      object has at least 3 languages in the languages array.

            const lang = users.filter((user) => {
                return user.languages.length >= 3;
            });
                        console.log(lang);

//-----------------------------.map----------------------------------//
//         Use .map to create an array of strings where each
//               element is a user's email address

            const emailArray = users.map((emails) => {
                return emails.email;
            });
                      console.log(emailArray);

//--------------------------Total years--------------------------------//
// Use reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.

            const totalYears = (users.reduce((total, user) => {
                return total + user.yearsOfExperience;
            }, 0));

                const averageYearsOfExperience = totalYears / users.length

                    console.log(averageYearsOfExperience);

//-------------------------Longest email-------------------------------//
//     Use reduce to get the longest email from the list of users.

            const longestUserEmail = users.reduce((longestEmail, user) => {
                if (longestEmail.length < user.email.length) {
                    return user.email;
                }
                return longestEmail;
            }, '');

                        console.log(longestUserEmail);

//-------------------------Single string-------------------------------//
//    Use reduce to get the list of user's names in a single string.
//   Example: Your instructors are: ryan, luis, zach, fernando, justin.

            const instructorNames = users.reduce((stringMessage, user, index) => {
                    if (index === users.length -1) {
                        return `${stringMessage}${user.name}.`
            }
                return `${stringMessage}${user.name},`
                    }, 'Your instructors are: ');

                        console.log(instructorNames);

//-----------------------------Bonus-----------------------------------//
// Use reduce to get the unique list of languages from the list of users.

