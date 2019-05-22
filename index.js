import 'bootstrap/dist/css/bootstrap.css';
import * as tf from '@tensorflow/tfjs';


// Creating a very simple neural network to perform the interface. This modl needs to deal with just one unput value and ine output value

// Define a machine learning model for linerar regression 
// creating new model instance: tf.sequential
const model = tf.sequential();
// Adding first layer: model.add
// New layer is passed into the add method by creating dence layer: tf.layers.dence.
// In a dence layer every node in the layer is connected to every node in the preceding layer. 
// Here, just adding only one  dence layer wirh an input and output shape of one to the neural network
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Specify the loss and the optimizer function for the model
model.compile({loss: 'meanSquaredError', optimizer:'sgd'});

// Training the Model
// Train model with value pairs from the function Y = 2X - 1

// Prepare training data
const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

// train the model
// result of the fit method is promise so we are able to register a callback function which is activated when the training is concluded

//model.fit(xs, ys, {epochs: 500}).then(() => {
    //predict the values
//    model.predict(tf.tensor2d([5], [1, 1])).print();
//});
/// Prediction value in console must be smth near 8.9951878 which is vary close to y value for function Y=2X-1 if x is 5

/// for better user experience 
// Train the model and set predict button to active

model.fit(xs, ys, {epochs: 500}).then(() => {
    // Use model to predict values
    document.getElementById('predictButton').disabled = false;
    document.getElementById('predictButton').innerText = "Predict";
});

// Register click event handler for predict button
document.getElementById('predictButton').addEventListener('click', (el, ev) => {
    let val = document.getElementById('inputValue').value;
    document.getElementById('output').innerText = model.predict(tf.tensor2d([parseInt(val)], [1,1]));
    /// result for Y = 2X -1 
    document.getElementById('functionResult').innerHTML = "Result for Y = 2X -1: " +  (parseInt(val)* 2 - 1) ;
    
});