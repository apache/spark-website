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


FMClassificationModel
===============================================

.. currentmodule:: pyspark.ml.classification

.. autoclass:: FMClassificationModel

    
      
    

    
    

    .. rubric:: Methods

    .. autosummary::
    
       ~FMClassificationModel.clear
       ~FMClassificationModel.copy
       ~FMClassificationModel.evaluate
       ~FMClassificationModel.explainParam
       ~FMClassificationModel.explainParams
       ~FMClassificationModel.extractParamMap
       ~FMClassificationModel.getFactorSize
       ~FMClassificationModel.getFeaturesCol
       ~FMClassificationModel.getFitIntercept
       ~FMClassificationModel.getFitLinear
       ~FMClassificationModel.getInitStd
       ~FMClassificationModel.getLabelCol
       ~FMClassificationModel.getMaxIter
       ~FMClassificationModel.getMiniBatchFraction
       ~FMClassificationModel.getOrDefault
       ~FMClassificationModel.getParam
       ~FMClassificationModel.getPredictionCol
       ~FMClassificationModel.getProbabilityCol
       ~FMClassificationModel.getRawPredictionCol
       ~FMClassificationModel.getRegParam
       ~FMClassificationModel.getSeed
       ~FMClassificationModel.getSolver
       ~FMClassificationModel.getStepSize
       ~FMClassificationModel.getThresholds
       ~FMClassificationModel.getTol
       ~FMClassificationModel.getWeightCol
       ~FMClassificationModel.hasDefault
       ~FMClassificationModel.hasParam
       ~FMClassificationModel.isDefined
       ~FMClassificationModel.isSet
       ~FMClassificationModel.load
       ~FMClassificationModel.predict
       ~FMClassificationModel.predictProbability
       ~FMClassificationModel.predictRaw
       ~FMClassificationModel.read
       ~FMClassificationModel.save
       ~FMClassificationModel.set
       ~FMClassificationModel.setFeaturesCol
       ~FMClassificationModel.setPredictionCol
       ~FMClassificationModel.setProbabilityCol
       ~FMClassificationModel.setRawPredictionCol
       ~FMClassificationModel.setThresholds
       ~FMClassificationModel.summary
       ~FMClassificationModel.transform
       ~FMClassificationModel.write

    
    

    
    

    .. rubric:: Attributes

    .. autosummary::
    
       ~FMClassificationModel.factorSize
       ~FMClassificationModel.factors
       ~FMClassificationModel.featuresCol
       ~FMClassificationModel.fitIntercept
       ~FMClassificationModel.fitLinear
       ~FMClassificationModel.hasSummary
       ~FMClassificationModel.initStd
       ~FMClassificationModel.intercept
       ~FMClassificationModel.labelCol
       ~FMClassificationModel.linear
       ~FMClassificationModel.maxIter
       ~FMClassificationModel.miniBatchFraction
       ~FMClassificationModel.numClasses
       ~FMClassificationModel.numFeatures
       ~FMClassificationModel.params
       ~FMClassificationModel.predictionCol
       ~FMClassificationModel.probabilityCol
       ~FMClassificationModel.rawPredictionCol
       ~FMClassificationModel.regParam
       ~FMClassificationModel.seed
       ~FMClassificationModel.solver
       ~FMClassificationModel.stepSize
       ~FMClassificationModel.thresholds
       ~FMClassificationModel.tol
       ~FMClassificationModel.weightCol

    
    

    
    

    .. rubric:: Methods Documentation

    
    .. automethod:: clear
    .. automethod:: copy
    .. automethod:: evaluate
    .. automethod:: explainParam
    .. automethod:: explainParams
    .. automethod:: extractParamMap
    .. automethod:: getFactorSize
    .. automethod:: getFeaturesCol
    .. automethod:: getFitIntercept
    .. automethod:: getFitLinear
    .. automethod:: getInitStd
    .. automethod:: getLabelCol
    .. automethod:: getMaxIter
    .. automethod:: getMiniBatchFraction
    .. automethod:: getOrDefault
    .. automethod:: getParam
    .. automethod:: getPredictionCol
    .. automethod:: getProbabilityCol
    .. automethod:: getRawPredictionCol
    .. automethod:: getRegParam
    .. automethod:: getSeed
    .. automethod:: getSolver
    .. automethod:: getStepSize
    .. automethod:: getThresholds
    .. automethod:: getTol
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
    .. automethod:: setThresholds
    .. automethod:: summary
    .. automethod:: transform
    .. automethod:: write

    
    

    
    

    .. rubric:: Attributes Documentation

    
    .. autoattribute:: factorSize
    .. autoattribute:: factors
    .. autoattribute:: featuresCol
    .. autoattribute:: fitIntercept
    .. autoattribute:: fitLinear
    .. autoattribute:: hasSummary
    .. autoattribute:: initStd
    .. autoattribute:: intercept
    .. autoattribute:: labelCol
    .. autoattribute:: linear
    .. autoattribute:: maxIter
    .. autoattribute:: miniBatchFraction
    .. autoattribute:: numClasses
    .. autoattribute:: numFeatures
    .. autoattribute:: params
    .. autoattribute:: predictionCol
    .. autoattribute:: probabilityCol
    .. autoattribute:: rawPredictionCol
    .. autoattribute:: regParam
    .. autoattribute:: seed
    .. autoattribute:: solver
    .. autoattribute:: stepSize
    .. autoattribute:: thresholds
    .. autoattribute:: tol
    .. autoattribute:: weightCol

    
    
