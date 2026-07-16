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


LinearSVCModel
========================================

.. currentmodule:: pyspark.ml.classification

.. autoclass:: LinearSVCModel

    
      
    

    
    

    .. rubric:: Methods

    .. autosummary::
    
       ~LinearSVCModel.clear
       ~LinearSVCModel.copy
       ~LinearSVCModel.evaluate
       ~LinearSVCModel.explainParam
       ~LinearSVCModel.explainParams
       ~LinearSVCModel.extractParamMap
       ~LinearSVCModel.getAggregationDepth
       ~LinearSVCModel.getFeaturesCol
       ~LinearSVCModel.getFitIntercept
       ~LinearSVCModel.getLabelCol
       ~LinearSVCModel.getMaxBlockSizeInMB
       ~LinearSVCModel.getMaxIter
       ~LinearSVCModel.getOrDefault
       ~LinearSVCModel.getParam
       ~LinearSVCModel.getPredictionCol
       ~LinearSVCModel.getRawPredictionCol
       ~LinearSVCModel.getRegParam
       ~LinearSVCModel.getStandardization
       ~LinearSVCModel.getThreshold
       ~LinearSVCModel.getTol
       ~LinearSVCModel.getWeightCol
       ~LinearSVCModel.hasDefault
       ~LinearSVCModel.hasParam
       ~LinearSVCModel.isDefined
       ~LinearSVCModel.isSet
       ~LinearSVCModel.load
       ~LinearSVCModel.predict
       ~LinearSVCModel.predictRaw
       ~LinearSVCModel.read
       ~LinearSVCModel.save
       ~LinearSVCModel.set
       ~LinearSVCModel.setFeaturesCol
       ~LinearSVCModel.setPredictionCol
       ~LinearSVCModel.setRawPredictionCol
       ~LinearSVCModel.setThreshold
       ~LinearSVCModel.summary
       ~LinearSVCModel.transform
       ~LinearSVCModel.write

    
    

    
    

    .. rubric:: Attributes

    .. autosummary::
    
       ~LinearSVCModel.aggregationDepth
       ~LinearSVCModel.coefficients
       ~LinearSVCModel.featuresCol
       ~LinearSVCModel.fitIntercept
       ~LinearSVCModel.hasSummary
       ~LinearSVCModel.intercept
       ~LinearSVCModel.labelCol
       ~LinearSVCModel.maxBlockSizeInMB
       ~LinearSVCModel.maxIter
       ~LinearSVCModel.numClasses
       ~LinearSVCModel.numFeatures
       ~LinearSVCModel.params
       ~LinearSVCModel.predictionCol
       ~LinearSVCModel.rawPredictionCol
       ~LinearSVCModel.regParam
       ~LinearSVCModel.standardization
       ~LinearSVCModel.threshold
       ~LinearSVCModel.tol
       ~LinearSVCModel.weightCol

    
    

    
    

    .. rubric:: Methods Documentation

    
    .. automethod:: clear
    .. automethod:: copy
    .. automethod:: evaluate
    .. automethod:: explainParam
    .. automethod:: explainParams
    .. automethod:: extractParamMap
    .. automethod:: getAggregationDepth
    .. automethod:: getFeaturesCol
    .. automethod:: getFitIntercept
    .. automethod:: getLabelCol
    .. automethod:: getMaxBlockSizeInMB
    .. automethod:: getMaxIter
    .. automethod:: getOrDefault
    .. automethod:: getParam
    .. automethod:: getPredictionCol
    .. automethod:: getRawPredictionCol
    .. automethod:: getRegParam
    .. automethod:: getStandardization
    .. automethod:: getThreshold
    .. automethod:: getTol
    .. automethod:: getWeightCol
    .. automethod:: hasDefault
    .. automethod:: hasParam
    .. automethod:: isDefined
    .. automethod:: isSet
    .. automethod:: load
    .. automethod:: predict
    .. automethod:: predictRaw
    .. automethod:: read
    .. automethod:: save
    .. automethod:: set
    .. automethod:: setFeaturesCol
    .. automethod:: setPredictionCol
    .. automethod:: setRawPredictionCol
    .. automethod:: setThreshold
    .. automethod:: summary
    .. automethod:: transform
    .. automethod:: write

    
    

    
    

    .. rubric:: Attributes Documentation

    
    .. autoattribute:: aggregationDepth
    .. autoattribute:: coefficients
    .. autoattribute:: featuresCol
    .. autoattribute:: fitIntercept
    .. autoattribute:: hasSummary
    .. autoattribute:: intercept
    .. autoattribute:: labelCol
    .. autoattribute:: maxBlockSizeInMB
    .. autoattribute:: maxIter
    .. autoattribute:: numClasses
    .. autoattribute:: numFeatures
    .. autoattribute:: params
    .. autoattribute:: predictionCol
    .. autoattribute:: rawPredictionCol
    .. autoattribute:: regParam
    .. autoattribute:: standardization
    .. autoattribute:: threshold
    .. autoattribute:: tol
    .. autoattribute:: weightCol

    
    
