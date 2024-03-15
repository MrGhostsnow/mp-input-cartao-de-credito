const formatCardNumber = (value: string): string => {
    // Remove todos os espaços existentes
    let formattedValue = value.replace(/\s/g, '');
   
    // Adiciona um espaço a cada 4 caracteres
    formattedValue = formattedValue.replace(/(\d{4})/g, '$1 ').trim();
   
    // Limita a string a 19 caracteres (16 dígitos + 3 espaços)
    return formattedValue.substring(0, 19);
   };

export default formatCardNumber