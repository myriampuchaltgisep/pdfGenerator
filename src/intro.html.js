const pageHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Flashcards</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
        body {
            font-family: 'Fredoka One';
        }
    </style>
</head>
<body>
<page class="app">
    <h1>{{ this.name }}</h1>
    <h2>{{ this.surname }}</h2>
</page>
</body>
</html>
`

export default pageHtml;