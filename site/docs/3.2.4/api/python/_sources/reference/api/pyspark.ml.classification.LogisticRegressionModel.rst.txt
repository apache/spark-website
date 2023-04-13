..  Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

..    http://www.apache.org/licenses/LICENSE-2.0

..  Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.


LogisticRegressionModel
=================================================

.. currentmodule:: pyspark.ml.classification

.. autoclass:: LogisticRegressionModel

    
      
    

    
    

    .. rubric:: Methods

    .. autosummary::
    
       ~LogisticRegressionModel.clear
       ~LogisticRegressionModel.copy
       ~LogisticRegressionModel.evaluate
       ~LogisticRegressionModel.explainParam
       ~LogisticRegressionModel.explainParams
       ~LogisticRegressionModel.extractParamMap
       ~LogisticRegressionModel.getAggregationDepth
       ~LogisticRegressionModel.getElasticNetParam
       ~LogisticRegressionModel.getFamily
       ~LogisticRegressionModel.getFeaturesCol
       ~LogisticRegressionModel.getFitIntercept
       ~LogisticRegressionModel.getLabelCol
       ~LogisticRegressionModel.getLowerBoundsOnCoefficients
       ~LogisticRegressionModel.getLowerBoundsOnIntercepts
       ~LogisticRegressionModel.getMaxBlockSizeInMB
       ~LogisticRegressionModel.getMaxIter
       ~LogisticRegressionModel.getOrDefault
       ~LogisticRegressionModel.getParam
       ~LogisticRegressionModel.getPredictionCol
       ~LogisticRegressionModel.getProbabilityCol
       ~LogisticRegressionModel.getRawPredictionCol
       ~LogisticRegressionModel.getRegParam
       ~LogisticRegressionModel.getStandardization
       ~LogisticRegressionModel.getThreshold
       ~LogisticRegressionModel.getThresholds
       ~LogisticRegressionModel.getTol
       ~LogisticRegressionModel.getUpperBoundsOnCoefficients
       ~LogisticRegressionModel.getUpperBoundsOnIntercepts
       ~LogisticRegressionModel.getWeightCol
       ~LogisticRegressionModel.hasDefault
       ~LogisticRegressionModel.hasParam
       ~LogisticRegressionModel.isDefined
       ~LogisticRegressionModel.isSet
       ~LogisticRegressionModel.load
       ~LogisticRegressionModel.predict
       ~LogisticRegressionModel.predictProbability
       ~LogisticRegressionModel.predictRaw
       ~LogisticRegressionModel.read
       ~LogisticRegressionModel.save
       ~LogisticRegressionModel.set
       ~LogisticRegressionModel.setFeaturesCol
       ~LogisticRegressionModel.setPredictionCol
       ~LogisticRegressionModel.setProbabilityCol
       ~LogisticRegressionModel.setRawPredictionCol
       ~LogisticRegressionModel.setThreshold
       ~LogisticRegressionModel.setThresholds
       ~LogisticRegressionModel.transform
       ~LogisticRegressionModel.write

    
    

    
    

    .. rubric:: Attributes

    .. autosummary::
    
       ~LogisticRegressionModel.aggregationDepth
       ~LogisticRegressionModel.coefficientMatrix
       ~LogisticRegressionModel.coefficients
       ~LogisticRegressionModel.elasticNetParam
       ~LogisticRegressionModel.family
       ~LogisticRegressionModel.featuresCol
       ~LogisticRegressionModel.fitIntercept
       ~LogisticRegressionModel.hasSummary
       ~LogisticRegressionModel.intercept
       ~LogisticRegressionModel.interceptVector
       ~LogisticRegressionModel.labelCol
       ~LogisticRegressionModel.lowerBoundsOnCoefficients
       ~LogisticRegressionModel.lowerBoundsOnIntercepts
       ~LogisticRegressionModel.maxBlockSizeInMB
       ~LogisticRegressionModel.maxIter
       ~LogisticRegressionModel.numClasses
       ~LogisticRegressionModel.numFeatures
       ~LogisticRegressionModel.params
       ~LogisticRegressionModel.predictionCol
       ~LogisticRegressionModel.probabilityCol
       ~LogisticRegressionModel.rawPredictionCol
       ~LogisticRegressionModel.regParam
       ~LogisticRegressionModel.standardization
       ~LogisticRegressionModel.summary
       ~LogisticRegressionModel.threshold
       ~LogisticRegressionModel.thresholds
       ~LogisticRegressionModel.tol
       ~LogisticRegressionModel.upperBoundsOnCoefficients
       ~LogisticRegressionModel.upperBoundsOnIntercepts
       ~LogisticRegressionModel.weightCol

    
    

    
    

    .. rubric:: Methods Documentation

    
    .. automethod:: clear
    .. automethod:: copy
    .. automethod:: evaluate
    .. automethod:: explainParam
    .. automethod:: explainParams
    .. automethod:: extractParamMap
    .. automethod:: getAggregationDepth
    .. automethod:: getElasticNetParam
    .. automethod:: getFamily
    .. automethod:: getFeaturesCol
    .. automethod:: getFitIntercept
    .. automethod:: getLabelCol
    .. automethod:: getLowerBoundsOnCoefficients
    .. automethod:: getLowerBoundsOnIntercepts
    .. automethod:: getMaxBlockSizeInMB
    .. automethod:: getMaxIter
    .. automethod:: getOrDefault
    .. automethod:: getParam
    .. automethod:: getPredictionCol
    .. automethod:: getProbabilityCol
    .. automethod:: getRawPredictionCol
    .. automethod:: getRegParam
    .. automethod:: getStandardization
    .. automethod:: getThreshold
    .. automethod:: getThresholds
    .. automethod:: getTol
    .. automethod:: getUpperBoundsOnCoefficients
    .. automethod:: getUpperBoundsOnIntercepts
    .. automethod:: getWeightCol
    .. automethod:: hasDefault
    .. automethod:: hasParam
    .. automethod:: isDefined
    .. automethod:: isSet
    .. automethod:: load
    .. automethod:: predict
    .. automethod:: predictProbability
    .. automethod:: predictRaw
    .. automethod:: read
    .. automethod:: save
    .. automethod:: set
    .. automethod:: setFeaturesCol
    .. automethod:: setPredictionCol
    .. automethod:: setProbabilityCol
    .. automethod:: setRawPredictionCol
    .. automethod:: setThreshold
    .. automethod:: setThresholds
    .. automethod:: transform
    .. automethod:: write

    
    

    
    

    .. rubric:: Attributes Documentation

    
    .. autoattribute:: aggregationDepth
    .. autoattribute:: coefficientMatrix
    .. autoattribute:: coefficients
    .. autoattribute:: elasticNetParam
    .. autoattribute:: family
    .. autoattribute:: featuresCol
    .. autoattribute:: fitIntercept
    .. autoattribute:: hasSummary
    .. autoattribute:: intercept
    .. autoattribute:: interceptVector
    .. autoattribute:: labelCol
    .. autoattribute:: lowerBoundsOnCoefficients
    .. autoattribute:: lowerBoundsOnIntercepts
    .. autoattribute:: maxBlockSizeInMB
    .. autoattribute:: maxIter
    .. autoattribute:: numClasses
    .. autoattribute:: numFeatures
    .. autoattribute:: params
    .. autoattribute:: predictionCol
    .. autoattribute:: probabilityCol
    .. autoattribute:: rawPredictionCol
    .. autoattribute:: regParam
    .. autoattribute:: standardization
    .. autoattribute:: summary
    .. autoattribute:: threshold
    .. autoattribute:: thresholds
    .. autoattribute:: tol
    .. autoattribute:: upperBoundsOnCoefficients
    .. autoattribute:: upperBoundsOnIntercepts
    .. autoattribute:: weightCol

    
    
