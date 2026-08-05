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


GBTRegressionModel
========================================

.. currentmodule:: pyspark.ml.regression

.. autoclass:: GBTRegressionModel

    
      
    

    
    

    .. rubric:: Methods

    .. autosummary::
    
       ~GBTRegressionModel.clear
       ~GBTRegressionModel.copy
       ~GBTRegressionModel.evaluateEachIteration
       ~GBTRegressionModel.explainParam
       ~GBTRegressionModel.explainParams
       ~GBTRegressionModel.extractParamMap
       ~GBTRegressionModel.getCacheNodeIds
       ~GBTRegressionModel.getCheckpointInterval
       ~GBTRegressionModel.getFeatureSubsetStrategy
       ~GBTRegressionModel.getFeaturesCol
       ~GBTRegressionModel.getImpurity
       ~GBTRegressionModel.getLabelCol
       ~GBTRegressionModel.getLeafCol
       ~GBTRegressionModel.getLossType
       ~GBTRegressionModel.getMaxBins
       ~GBTRegressionModel.getMaxDepth
       ~GBTRegressionModel.getMaxIter
       ~GBTRegressionModel.getMaxMemoryInMB
       ~GBTRegressionModel.getMinInfoGain
       ~GBTRegressionModel.getMinInstancesPerNode
       ~GBTRegressionModel.getMinWeightFractionPerNode
       ~GBTRegressionModel.getOrDefault
       ~GBTRegressionModel.getParam
       ~GBTRegressionModel.getPredictionCol
       ~GBTRegressionModel.getSeed
       ~GBTRegressionModel.getStepSize
       ~GBTRegressionModel.getSubsamplingRate
       ~GBTRegressionModel.getValidationIndicatorCol
       ~GBTRegressionModel.getValidationTol
       ~GBTRegressionModel.getWeightCol
       ~GBTRegressionModel.hasDefault
       ~GBTRegressionModel.hasParam
       ~GBTRegressionModel.isDefined
       ~GBTRegressionModel.isSet
       ~GBTRegressionModel.load
       ~GBTRegressionModel.predict
       ~GBTRegressionModel.predictLeaf
       ~GBTRegressionModel.read
       ~GBTRegressionModel.save
       ~GBTRegressionModel.set
       ~GBTRegressionModel.setFeaturesCol
       ~GBTRegressionModel.setLeafCol
       ~GBTRegressionModel.setPredictionCol
       ~GBTRegressionModel.transform
       ~GBTRegressionModel.write

    
    

    
    

    .. rubric:: Attributes

    .. autosummary::
    
       ~GBTRegressionModel.cacheNodeIds
       ~GBTRegressionModel.checkpointInterval
       ~GBTRegressionModel.featureImportances
       ~GBTRegressionModel.featureSubsetStrategy
       ~GBTRegressionModel.featuresCol
       ~GBTRegressionModel.getNumTrees
       ~GBTRegressionModel.impurity
       ~GBTRegressionModel.labelCol
       ~GBTRegressionModel.leafCol
       ~GBTRegressionModel.lossType
       ~GBTRegressionModel.maxBins
       ~GBTRegressionModel.maxDepth
       ~GBTRegressionModel.maxIter
       ~GBTRegressionModel.maxMemoryInMB
       ~GBTRegressionModel.minInfoGain
       ~GBTRegressionModel.minInstancesPerNode
       ~GBTRegressionModel.minWeightFractionPerNode
       ~GBTRegressionModel.numFeatures
       ~GBTRegressionModel.params
       ~GBTRegressionModel.predictionCol
       ~GBTRegressionModel.seed
       ~GBTRegressionModel.stepSize
       ~GBTRegressionModel.subsamplingRate
       ~GBTRegressionModel.supportedFeatureSubsetStrategies
       ~GBTRegressionModel.supportedImpurities
       ~GBTRegressionModel.supportedLossTypes
       ~GBTRegressionModel.toDebugString
       ~GBTRegressionModel.totalNumNodes
       ~GBTRegressionModel.treeWeights
       ~GBTRegressionModel.trees
       ~GBTRegressionModel.validationIndicatorCol
       ~GBTRegressionModel.validationTol
       ~GBTRegressionModel.weightCol

    
    

    
    

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
    .. automethod:: predict
    .. automethod:: predictLeaf
    .. automethod:: read
    .. automethod:: save
    .. automethod:: set
    .. automethod:: setFeaturesCol
    .. automethod:: setLeafCol
    .. automethod:: setPredictionCol
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
    .. autoattribute:: numFeatures
    .. autoattribute:: params
    .. autoattribute:: predictionCol
    .. autoattribute:: seed
    .. autoattribute:: stepSize
    .. autoattribute:: subsamplingRate
    .. autoattribute:: supportedFeatureSubsetStrategies
    .. autoattribute:: supportedImpurities
    .. autoattribute:: supportedLossTypes
    .. autoattribute:: toDebugString
    .. autoattribute:: totalNumNodes
    .. autoattribute:: treeWeights
    .. autoattribute:: trees
    .. autoattribute:: validationIndicatorCol
    .. autoattribute:: validationTol
    .. autoattribute:: weightCol

    
    
