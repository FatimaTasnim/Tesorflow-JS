## Required Installations
```
npm init -y

npm install bootstrap
```

### Tensorflow Packages
```
npm install @tensorflow/tfjs

npm install @tensorflow/tfjs-vis


```
### Parcel
```
npm install -g parcel-bundler

```

### Run the code
```
parcel index.html
```

## Input Data Visualization
![Image Data Load](Images/LoadData.png)

Each image is 28px wide 28px high and has a 1 color channel as it is a grayscale image. So the shape of each image is [28, 28, 1].

## Important Links
- [Image kernels explained Visually](http://setosa.io/ev/image-kernels/)
- [Convolutional Neural Networks for Visual Recognition](http://cs231n.github.io/convolutional-networks/)
- [Good Kernel Initializer Choice](https://js.tensorflow.org/api/latest/#Initializers)

## Model Architecture
![Architecture](Images/Architecture.png)

## Model Training On Batch End
![training1](Images/training1.png)

## Model Training on Epoch End 
![training](Images/training2.png)

## Accuracy
![Accuracy](Images/Accuracy.png)

## Conftusion Matrix
![Confusion Matrix](Images/ConfusionMatrix.png)