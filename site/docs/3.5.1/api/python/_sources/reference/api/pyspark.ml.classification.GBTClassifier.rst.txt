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


GBTClassifier
=======================================

.. currentmodule:: pyspark.ml.classification

.. autoclass:: GBTClassifier

    
      
    

    
    

    .. rubric:: Methods

    .. autosummary::
    
       ~GBTClassifier.clear
       ~GBTClassifier.copy
       ~GBTClassifier.explainParam
       ~GBTClassifier.explainParams
       ~GBTClassifier.extractParamMap
       ~GBTClassifier.fit
       ~GBTClassifier.fitMultiple
       ~GBTClassifier.getCacheNodeIds
       ~GBTClassifier.getCheckpointInterval
       ~GBTClassifier.getFeatureSubsetStrategy
       ~GBTClassifier.getFeaturesCol
       ~GBTClassifier.getImpurity
       ~GBTClassifier.getLabelCol
       ~GBTClassifier.getLeafCol
       ~GBTClassifier.getLossType
       ~GBTClassifier.getMaxBins
       ~GBTClassifier.getMaxDepth
       ~GBTClassifier.getMaxIter
       ~GBTClassifier.getMaxMemoryInMB
       ~GBTClassifier.getMinInfoGain
       ~GBTClassifier.getMinInstancesPerNode
       ~GBTClassifier.getMinWeightFractionPerNode
       ~GBTClassifier.getOrDefault
       ~GBTClassifier.getParam
       ~GBTClassifier.getPredictionCol
       ~GBTClassifier.getProbabilityCol
       ~GBTClassifier.getRawPredictionCol
       ~GBTClassifier.getSeed
       ~GBTClassifier.getStepSize
       ~GBTClassifier.getSubsamplingRate
       ~GBTClassifier.getThresholds
       ~GBTClassifier.getValidationIndicatorCol
       ~GBTClassifier.getValidationTol
       ~GBTClassifier.getWeightCol
       ~GBTClassifier.hasDefault
       ~GBTClassifier.hasParam
       ~GBTClassifier.isDefined
       ~GBTClassifier.isSet
       ~GBTClassifier.load
       ~GBTClassifier.read
       ~GBTClassifier.save
       ~GBTClassifier.set
       ~GBTClassifier.setCacheNodeIds
       ~GBTClassifier.setCheckpointInterval
       ~GBTClassifier.setFeatureSubsetStrategy
       ~GBTClassifier.setFeaturesCol
       ~GBTClassifier.setImpurity
       ~GBTClassifier.setLabelCol
       ~GBTClassifier.setLeafCol
       ~GBTClassifier.setLossType
       ~GBTClassifier.setMaxBins
       ~GBTClassifier.setMaxDepth
       ~GBTClassifier.setMaxIter
       ~GBTClassifier.setMaxMemoryInMB
       ~GBTClassifier.setMinInfoGain
       ~GBTClassifier.setMinInstancesPerNode
       ~GBTClassifier.setMinWeightFractionPerNode
       ~GBTClassifier.setParams
       ~GBTClassifier.setPredictionCol
       ~GBTClassifier.setProbabilityCol
       ~GBTClassifier.setRawPredictionCol
       ~GBTClassifier.setSeed
       ~GBTClassifier.setStepSize
       ~GBTClassifier.setSubsamplingRate
       ~GBTClassifier.setThresholds
       ~GBTClassifier.setValidationIndicatorCol
       ~GBTClassifier.setWeightCol
       ~GBTClassifier.write

    
    

    
    

    .. rubric:: Attributes

    .. autosummary::
    
       ~GBTClassifier.cacheNodeIds
       ~GBTClassifier.checkpointInterval
       ~GBTClassifier.featureSubsetStrategy
       ~GBTClassifier.featuresCol
       ~GBTClassifier.impurity
       ~GBTClassifier.labelCol
       ~GBTClassifier.leafCol
       ~GBTClassifier.lossType
       ~GBTClassifier.maxBins
       ~GBTClassifier.maxDepth
       ~GBTClassifier.maxIter
       ~GBTClassifier.maxMemoryInMB
       ~GBTClassifier.minInfoGain
       ~GBTClassifier.minInstancesPerNode
       ~GBTClassifier.minWeightFractionPerNode
       ~GBTClassifier.params
       ~GBTClassifier.predictionCol
       ~GBTClassifier.probabilityCol
       ~GBTClassifier.rawPredictionCol
       ~GBTClassifier.seed
       ~GBTClassifier.stepSize
       ~GBTClassifier.subsamplingRate
       ~GBTClassifier.supportedFeatureSubsetStrategies
       ~GBTClassifier.supportedImpurities
       ~GBTClassifier.supportedLossTypes
       ~GBTClassifier.thresholds
       ~GBTClassifier.validationIndicatorCol
       ~GBTClassifier.validationTol
       ~GBTClassifier.weightCol

    
    

    
    

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
    .. automethod:: getProbabilityCol
    .. automethod:: getRawPredictionCol
    .. automethod:: getSeed
    .. automethod:: getStepSize
    .. automethod:: getSubsamplingRate
    .. automethod:: getThresholds
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
    .. automethod:: setProbabilityCol
    .. automethod:: setRawPredictionCol
    .. automethod:: setSeed
    .. automethod:: setStepSize
    .. automethod:: setSubsamplingRate
    .. automethod:: setThresholds
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
    .. autoattribute:: probabilityCol
    .. autoattribute:: rawPredictionCol
    .. autoattribute:: seed
    .. autoattribute:: stepSize
    .. autoattribute:: subsamplingRate
    .. autoattribute:: supportedFeatureSubsetStrategies
    .. autoattribute:: supportedImpurities
    .. autoattribute:: supportedLossTypes
    .. autoattribute:: thresholds
    .. autoattribute:: validationIndicatorCol
    .. autoattribute:: validationTol
    .. autoattribute:: weightCol

    
    
