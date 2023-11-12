// Function to validate an email address
export function validEmail(email) {
    // Regular expression for matching valid email addresses
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Use the test method to check if the email matches the regular expression
    // String(email).toLowerCase() is used to convert the email to lowercase for case-insensitive matching
    return regex.test(String(email).toLowerCase());
}
