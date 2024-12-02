<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>
    <script>
        $(document).ready(function () {
            // JSON data
            const stuData = {
                "Students": [
                    {
                        "name": "Ahmad",
                        "matricNo": "AI00001",
                        "age": 22,
                        "address": "Kuala Lumpur",
                        "subjects": ["Web Development", "Database", "Java"]
                    },
                    {
                        "name": "Steve",
                        "matricNo": "AI00002",
                        "age": 25,
                        "address": "California",
                        "subjects": ["Python", "Node.js", "Flutter"]
                    }
                ]
            };

            // a) Log the name of the first student
            console.log($(stuData.Students[0]).prop("name"));

            // b) Log the matric number of the first student
            console.log($(stuData.Students[0]).prop("matricNo"));

            // c) Loop through students and display subjects
            $.each(stuData.Students, function (index, student) {
                console.log(student.subjects);
            });
        });
    </script>
</body>
</html>
