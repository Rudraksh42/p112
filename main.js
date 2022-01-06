var speak_data_1;
var speak_data_2;
var meaning_1;
var meaning_2;

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

var camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'
    });
}

console.log("ml5 version: " + ml5.version);

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/24ovXk7zL/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The meaning of the first hand gesture is " + meaning_1;
    speak_data_2 = "And the meaning of the second hand gesture is " + meaning_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check() {
    var img = document.getElementById("captured_image");
    classifier.classify(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }

    else {
        console.log(results);
        document.getElementById("result_gesture_name1").innerHTML = results[0].label;
        document.getElementById("result_gesture_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;

        //prediction 1
        if (prediction_1 == "THUMBS UP") {
            document.getElementById("update_emoji1").innerHTML = "&#128077;";
            meaning_1 = "Thumb is up!";
        }

        if (prediction_1 == "THUMBS DOWN") {
            document.getElementById("update_emoji1").innerHTML = "&#128078";
            meaning_1 = "Thumb is down!";
        }

        if (prediction_1 == "nice") {
            document.getElementById("update_emoji1").innerHTML = "&#128076;";
            meaning_1 = "YOU look nice!";
        }

        if (prediction_1 == "HAND JOINED") {
            document.getElementById("update_emoji1").innerHTML = "&#128591;";
            meaning_1 = "Namaste!";
        }

        if (prediction_1 == "yO") {
            document.getElementById("update_emoji1").innerHTML = "&#129304;";
            meaning_1 = "YO FIREND!";
        }
        //prediction 2
       
        }
        if (prediction_1 == "THUMBS UP") {
            document.getElementById("update_emoji2").innerHTML = "&#128077;";
            meaning_1 = "THumb is up!";
        }

        if (prediction_1 == "THUMBS DOWN") {
            document.getElementById("update_emoji2").innerHTML = "&#128078;";
            meaning_1 = "thumb is down!";
        }

        if (prediction_1 == "nice") {
            document.getElementById("update_emoji2").innerHTML = "&#128076;";
            meaning_1 = "YOU look nice!";
        }

        if (prediction_1 == "HAND JOINED") {
            document.getElementById("update_emoji2").innerHTML = "&#128591	;";
            meaning_1 = "Namaste!";

            if (prediction_1 == "yO") {
                document.getElementById("update_emoji1").innerHTML = "129304 ;";
                meaning_1 = "YO FIREND!";
            }
       

        speak();
    }
}