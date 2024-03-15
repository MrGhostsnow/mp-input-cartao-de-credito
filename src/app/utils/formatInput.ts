const formatInput = (value: string): string => {
    // Divide o valor inserido pelo espaço em branco para obter as palavras
    const words = value.split(' ');
    // Verifica se o número de palavras é maior que 2
    if (words.length > 2) {
       // Se houver mais de 2 palavras, pega a primeira palavra, a inicial da segunda e as palavras restantes
       const formattedWords = [words[0], words[1].charAt(0), ...words.slice(2)];
       // Junta as palavras formatadas com espaços em branco
       return formattedWords.join(' ').toUpperCase();
    }
    // Se houver 2 ou menos palavras, retorna o valor original
    return value;
}

export default formatInput;
