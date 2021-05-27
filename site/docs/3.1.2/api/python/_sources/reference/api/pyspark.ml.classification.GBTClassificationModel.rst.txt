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


GBTClassificationModel
================================================

.. currentmodule:: pyspark.ml.classification

.. autoclass:: GBTClassificationModel

    
      
    

    
    

    .. rubric:: Methods

    .. autosummary::
    
       ~GBTClassificationModel.clear
       ~GBTClassificationModel.copy
       ~GBTClassificationModel.evaluateEachIteration
       ~GBTClassificationModel.explainParam
       ~GBTClassificationModel.explainParams
       ~GBTClassificationModel.extractParamMap
       ~GBTClassificationModel.getCacheNodeIds
       ~GBTClassificationModel.getCheckpointInterval
       ~GBTClassificationModel.getFeatureSubsetStrategy
       ~GBTClassificationModel.getFeaturesCol
       ~GBTClassificationModel.getImpurity
       ~GBTClassificationModel.getLabelCol
       ~GBTClassificationModel.getLeafCol
       ~GBTClassificationModel.getLossType
       ~GBTClassificationModel.getMaxBins
       ~GBTClassificationModel.getMaxDepth
       ~GBTClassificationModel.getMaxIter
       ~GBTClassificationModel.getMaxMemoryInMB
       ~GBTClassificationModel.getMinInfoGain
       ~GBTClassificationModel.getMinInstancesPerNode
       ~GBTClassificationModel.getMinWeightFractionPerNode
       ~GBTClassificationModel.getOrDefault
       ~GBTClassificationModel.getParam
       ~GBTClassificationModel.getPredictionCol
       ~GBTClassificationModel.getProbabilityCol
       ~GBTClassificationModel.getRawPredictionCol
       ~GBTClassificationModel.getSeed
       ~GBTClassificationModel.getStepSize
       ~GBTClassificationModel.getSubsamplingRate
       ~GBTClassificationModel.getThresholds
       ~GBTClassificationModel.getValidationIndicatorCol
       ~GBTClassificationModel.getValidationTol
       ~GBTClassificationModel.getWeightCol
       ~GBTClassificationModel.hasDefault
       ~GBTClassificationModel.hasParam
       ~GBTClassificationModel.isDefined
       ~GBTClassificationModel.isSet
       ~GBTClassificationModel.load
       ~GBTClassificationModel.predict
       ~GBTClassificationModel.predictLeaf
       ~GBTClassificationModel.predictProbability
       ~GBTClassificationModel.predictRaw
       ~GBTClassificationModel.read
       ~GBTClassificationModel.save
       ~GBTClassificationModel.set
       ~GBTClassificationModel.setFeaturesCol
       ~GBTClassificationModel.setLeafCol
       ~GBTClassificationModel.setPredictionCol
       ~GBTClassificationModel.setProbabilityCol
       ~GBTClassificationModel.setRawPredictionCol
       ~GBTClassificationModel.setThresholds
       ~GBTClassificationModel.transform
       ~GBTClassificationModel.write

    
    

    
    

    .. rubric:: Attributes

    .. autosummary::
    
       ~GBTClassificationModel.cacheNodeIds
       ~GBTClassificationModel.checkpointInterval
       ~GBTClassificationModel.featureImportances
       ~GBTClassificationModel.featureSubsetStrategy
       ~GBTClassificationModel.featuresCol
       ~GBTClassificationModel.getNumTrees
       ~GBTClassificationModel.impurity
       ~GBTClassificationModel.labelCol
       ~GBTClassificationModel.leafCol
       ~GBTClassificationModel.lossType
       ~GBTClassificationModel.maxBins
       ~GBTClassificationModel.maxDepth
       ~GBTClassificationModel.maxIter
       ~GBTClassificationModel.maxMemoryInMB
       ~GBTClassificationModel.minInfoGain
       ~GBTClassificationModel.minInstancesPerNode
       ~GBTClassificationModel.minWeightFractionPerNode
       ~GBTClassificationModel.numClasses
       ~GBTClassificationModel.numFeatures
       ~GBTClassificationModel.params
       ~GBTClassificationModel.predictionCol
       ~GBTClassificationModel.probabilityCol
       ~GBTClassificationModel.rawPredictionCol
       ~GBTClassificationModel.seed
       ~GBTClassificationModel.stepSize
       ~GBTClassificationModel.subsamplingRate
       ~GBTClassificationModel.supportedFeatureSubsetStrategies
       ~GBTClassificationModel.supportedImpurities
       ~GBTClassificationModel.supportedLossTypes
       ~GBTClassificationModel.thresholds
       ~GBTClassificationModel.toDebugString
       ~GBTClassificationModel.totalNumNodes
       ~GBTClassificationModel.treeWeights
       ~GBTClassificationModel.trees
       ~GBTClassificationModel.validationIndicatorCol
       ~GBTClassificationModel.validationTol
       ~GBTClassificationModel.weightCol

    
    

    
    

    .. rubric:: Methods Documentation

    
    .. automethod:: clear
    .. automethod:: copy
    .. automethod:: evaluateEachIteration
    .. automethod:: explainParam
    .. automethod:: explainParams
    .. automethod:: extractParamMap
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
    .. automethod:: predict
    .. automethod:: predictLeaf
    .. automethod:: predictProbability
    .. automethod:: predictRaw
    .. automethod:: read
    .. automethod:: save
    .. automethod:: set
    .. automethod:: setFeaturesCol
    .. automethod:: setLeafCol
    .. automethod:: setPredictionCol
    .. automethod:: setProbabilityCol
    .. automethod:: setRawPredictionCol
    .. automethod:: setThresholds
    .. automethod:: transform
    .. automethod:: write

    
    

    
    

    .. rubric:: Attributes Documentation

    
    .. autoattribute:: cacheNodeIds
    .. autoattribute:: checkpointInterval
    .. autoattribute:: featureImportances
    .. autoattribute:: featureSubsetStrategy
    .. autoattribute:: featuresCol
    .. autoattribute:: getNumTrees
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
    .. autoattribute:: numClasses
    .. autoattribute:: numFeatures
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
    .. autoattribute:: toDebugString
    .. autoattribute:: totalNumNodes
    .. autoattribute:: treeWeights
    .. autoattribute:: trees
    .. autoattribute:: validationIndicatorCol
    .. autoattribute:: validationTol
    .. autoattribute:: weightCol

    
    
