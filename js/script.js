
// Referencias HTML
const form = document.querySelector( '#form' );
const generated_password_input = document.querySelector( '#generated_password_input' ); 
const password_length_input = document.querySelector( '#password_length_input' );
const include_lowercase = document.querySelector( '#include_lowercase' );
const include_uppercase = document.querySelector( '#include_uppercase' );
const include_numbers = document.querySelector( '#include_numbers' );
const include_symbols = document.querySelector( '#include_symbols' );
const copy_btn = document.querySelector( '#copy_btn' ); 


// Characters strings
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '#?.\,$(/:=^{}";)*|+%~_]@<-[`&>!';


form.addEventListener( 'submit', ( e ) => {
    e.preventDefault();

    let possibleChars = '';

    if ( include_lowercase.checked )
        possibleChars += lowercase

    if ( include_uppercase.checked )
        possibleChars += uppercase

    if ( include_numbers.checked )
        possibleChars += numbers

    if ( include_symbols.checked )
        possibleChars += symbols

    // Si ninguno está seleccionado, solo lowercase
    if ( !possibleChars )
        possibleChars = lowercase;

    
    // Generamos random password
    let randomPassword = '';

    for ( let i = 0; i < password_length_input.value; i++ ) {
        randomPassword += possibleChars[ Math.floor( Math.random() * possibleChars.length ) ];
    }

    // Colcamos la password en el input
    generated_password_input.value = randomPassword;
})



copy_btn.addEventListener( 'click', () => {

    if ( !generated_password_input.value ) return;

    generated_password_input.disabled = false;

    // Seleccionamos
    generated_password_input.select();

    // Copiamos
    document.execCommand( "Copy" );

    // Estilos
    copy_btn.classList.add( 'copied' );

    setTimeout( () => {
        copy_btn.classList.remove( 'copied' );     
    }, 1000 );


    generated_password_input.disabled = true;
})
