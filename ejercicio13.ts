
// Enum 
enum Color {
    red = "Red",
    green = "Green",
    blue = "Blue" 
}

const msgColor = (color: Color): void => {
    console.log(`Tu color seleccionado es ${color}`);
}

const seleccionarColor: Color = Color.green;
msgColor(seleccionarColor)