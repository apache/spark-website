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


GBTRegressor
==================================

.. currentmodule:: pyspark.ml.regression

.. autoclass:: GBTRegressor

    
      
    

    
    

    .. rubric:: Methods

    .. autosummary::
    
       ~GBTRegressor.clear
       ~GBTRegressor.copy
       ~GBTRegressor.explainParam
       ~GBTRegressor.explainParams
       ~GBTRegressor.extractParamMap
       ~GBTRegressor.fit
       ~GBTRegressor.fitMultiple
       ~GBTRegressor.getCacheNodeIds
       ~GBTRegressor.getCheckpointInterval
       ~GBTRegressor.getFeatureSubsetStrategy
       ~GBTRegressor.getFeaturesCol
       ~GBTRegressor.getImpurity
       ~GBTRegressor.getLabelCol
       ~GBTRegressor.getLeafCol
       ~GBTRegressor.getLossType
       ~GBTRegressor.getMaxBins
       ~GBTRegressor.getMaxDepth
       ~GBTRegressor.getMaxIter
       ~GBTRegressor.getMaxMemoryInMB
       ~GBTRegressor.getMinInfoGain
       ~GBTRegressor.getMinInstancesPerNode
       ~GBTRegressor.getMinWeightFractionPerNode
       ~GBTRegressor.getOrDefault
       ~GBTRegressor.getParam
       ~GBTRegressor.getPredictionCol
       ~GBTRegressor.getSeed
       ~GBTRegressor.getStepSize
       ~GBTRegressor.getSubsamplingRate
       ~GBTRegressor.getValidationIndicatorCol
       ~GBTRegressor.getValidationTol
       ~GBTRegressor.getWeightCol
       ~GBTRegressor.hasDefault
       ~GBTRegressor.hasParam
       ~GBTRegressor.isDefined
       ~GBTRegressor.isSet
       ~GBTRegressor.load
       ~GBTRegressor.read
       ~GBTRegressor.save
       ~GBTRegressor.set
       ~GBTRegressor.setCacheNodeIds
       ~GBTRegressor.setCheckpointInterval
       ~GBTRegressor.setFeatureSubsetStrategy
       ~GBTRegressor.setFeaturesCol
       ~GBTRegressor.setImpurity
       ~GBTRegressor.setLabelCol
       ~GBTRegressor.setLeafCol
       ~GBTRegressor.setLossType
       ~GBTRegressor.setMaxBins
       ~GBTRegressor.setMaxDepth
       ~GBTRegressor.setMaxIter
       ~GBTRegressor.setMaxMemoryInMB
       ~GBTRegressor.setMinInfoGain
       ~GBTRegressor.setMinInstancesPerNode
       ~GBTRegressor.setMinWeightFractionPerNode
       ~GBTRegressor.setParams
       ~GBTRegressor.setPredictionCol
       ~GBTRegressor.setSeed
       ~GBTRegressor.setStepSize
       ~GBTRegressor.setSubsamplingRate
       ~GBTRegressor.setValidationIndicatorCol
       ~GBTRegressor.setWeightCol
       ~GBTRegressor.write

    
    

    
    

    .. rubric:: Attributes

    .. autosummary::
    
       ~GBTRegressor.cacheNodeIds
       ~GBTRegressor.checkpointInterval
       ~GBTRegressor.featureSubsetStrategy
       ~GBTRegressor.featuresCol
       ~GBTRegressor.impurity
       ~GBTRegressor.labelCol
       ~GBTRegressor.leafCol
       ~GBTRegressor.lossType
       ~GBTRegressor.maxBins
       ~GBTRegressor.maxDepth
       ~GBTRegressor.maxIter
       ~GBTRegressor.maxMemoryInMB
       ~GBTRegressor.minInfoGain
       ~GBTRegressor.minInstancesPerNode
       ~GBTRegressor.minWeightFractionPerNode
       ~GBTRegressor.params
       ~GBTRegressor.predictionCol
       ~GBTRegressor.seed
       ~GBTRegressor.stepSize
       ~GBTRegressor.subsamplingRate
       ~GBTRegressor.supportedFeatureSubsetStrategies
       ~GBTRegressor.supportedImpurities
       ~GBTRegressor.supportedLossTypes
       ~GBTRegressor.validationIndicatorCol
       ~GBTRegressor.validationTol
       ~GBTRegressor.weightCol

    
    

    
    

    .. rubric:: Methods Documentation

    
    .. automethod:: clear
    .. automethod:: copy
    .. automethod:: explainParam
    .. automethod:: explainParams
    .. automethod:: extractParamMap
    .. automethod:: fit
    .. automethod:: fitMultiple
    .. automethod:: getCacheNodeIds
    .. automethod:: getCheckpointInterval
    .. automethod:: getFeatureSubsetStrategy
    .. automethod:: getFeaturesCol
    .. automethod:: getImpurity
    .. automethod:: getLabelCol
    .. automethod:: getLeafCol
    .. automethod:: getLossType
    .. automethod:: getMaxBins
    .. automethod:: getMaxDepth
    .. automethod:: getMaxIter
    .. automethod:: getMaxMemoryInMB
    .. automethod:: getMinInfoGain
    .. automethod:: getMinInstancesPerNode
    .. automethod:: getMinWeightFractionPerNode
    .. automethod:: getOrDefault
    .. automethod:: getParam
    .. automethod:: getPredictionCol
    .. automethod:: getSeed
    .. automethod:: getStepSize
    .. automethod:: getSubsamplingRate
    .. automethod:: getValidationIndicatorCol
    .. automethod:: getValidationTol
    .. automethod:: getWeightCol
    .. automethod:: hasDefault
    .. automethod:: hasParam
    .. automethod:: isDefined
    .. automethod:: isSet
    .. automethod:: load
    .. automethod:: read
    .. automethod:: save
    .. automethod:: set
    .. automethod:: setCacheNodeIds
    .. automethod:: setCheckpointInterval
    .. automethod:: setFeatureSubsetStrategy
    .. automethod:: setFeaturesCol
    .. automethod:: setImpurity
    .. automethod:: setLabelCol
    .. automethod:: setLeafCol
    .. automethod:: setLossType
    .. automethod:: setMaxBins
    .. automethod:: setMaxDepth
    .. automethod:: setMaxIter
    .. automethod:: setMaxMemoryInMB
    .. automethod:: setMinInfoGain
    .. automethod:: setMinInstancesPerNode
    .. automethod:: setMinWeightFractionPerNode
    .. automethod:: setParams
    .. automethod:: setPredictionCol
    .. automethod:: setSeed
    .. automethod:: setStepSize
    .. automethod:: setSubsamplingRate
    .. automethod:: setValidationIndicatorCol
    .. automethod:: setWeightCol
    .. automethod:: write

    
    

    
    

    .. rubric:: Attributes Documentation

    
    .. autoattribute:: cacheNodeIds
    .. autoattribute:: checkpointInterval
    .. autoattribute:: featureSubsetStrategy
    .. autoattribute:: featuresCol
    .. autoattribute:: impurity
    .. autoattribute:: labelCol
    .. autoattribute:: leafCol
    .. autoattribute:: lossType
    .. autoattribute:: maxBins
    .. autoattribute:: maxDepth
    .. autoattribute:: maxIter
    .. autoattribute:: maxMemoryInMB
    .. autoattribute:: minInfoGain
    .. autoattribute:: minInstancesPerNode
    .. autoattribute:: minWeightFractionPerNode
    .. autoattribute:: params
    .. autoattribute:: predictionCol
    .. autoattribute:: seed
    .. autoattribute:: stepSize
    .. autoattribute:: subsamplingRate
    .. autoattribute:: supportedFeatureSubsetStrategies
    .. autoattribute:: supportedImpurities
    .. autoattribute:: supportedLossTypes
    .. autoattribute:: validationIndicatorCol
    .. autoattribute:: validationTol
    .. autoattribute:: weightCol

    
    
