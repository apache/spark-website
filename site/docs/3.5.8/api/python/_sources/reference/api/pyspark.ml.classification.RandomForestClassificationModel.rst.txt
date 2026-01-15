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


RandomForestClassificationModel
=========================================================

.. currentmodule:: pyspark.ml.classification

.. autoclass:: RandomForestClassificationModel

    
      
    

    
    

    .. rubric:: Methods

    .. autosummary::
    
       ~RandomForestClassificationModel.clear
       ~RandomForestClassificationModel.copy
       ~RandomForestClassificationModel.evaluate
       ~RandomForestClassificationModel.explainParam
       ~RandomForestClassificationModel.explainParams
       ~RandomForestClassificationModel.extractParamMap
       ~RandomForestClassificationModel.getBootstrap
       ~RandomForestClassificationModel.getCacheNodeIds
       ~RandomForestClassificationModel.getCheckpointInterval
       ~RandomForestClassificationModel.getFeatureSubsetStrategy
       ~RandomForestClassificationModel.getFeaturesCol
       ~RandomForestClassificationModel.getImpurity
       ~RandomForestClassificationModel.getLabelCol
       ~RandomForestClassificationModel.getLeafCol
       ~RandomForestClassificationModel.getMaxBins
       ~RandomForestClassificationModel.getMaxDepth
       ~RandomForestClassificationModel.getMaxMemoryInMB
       ~RandomForestClassificationModel.getMinInfoGain
       ~RandomForestClassificationModel.getMinInstancesPerNode
       ~RandomForestClassificationModel.getMinWeightFractionPerNode
       ~RandomForestClassificationModel.getOrDefault
       ~RandomForestClassificationModel.getParam
       ~RandomForestClassificationModel.getPredictionCol
       ~RandomForestClassificationModel.getProbabilityCol
       ~RandomForestClassificationModel.getRawPredictionCol
       ~RandomForestClassificationModel.getSeed
       ~RandomForestClassificationModel.getSubsamplingRate
       ~RandomForestClassificationModel.getThresholds
       ~RandomForestClassificationModel.getWeightCol
       ~RandomForestClassificationModel.hasDefault
       ~RandomForestClassificationModel.hasParam
       ~RandomForestClassificationModel.isDefined
       ~RandomForestClassificationModel.isSet
       ~RandomForestClassificationModel.load
       ~RandomForestClassificationModel.predict
       ~RandomForestClassificationModel.predictLeaf
       ~RandomForestClassificationModel.predictProbability
       ~RandomForestClassificationModel.predictRaw
       ~RandomForestClassificationModel.read
       ~RandomForestClassificationModel.save
       ~RandomForestClassificationModel.set
       ~RandomForestClassificationModel.setFeaturesCol
       ~RandomForestClassificationModel.setLeafCol
       ~RandomForestClassificationModel.setPredictionCol
       ~RandomForestClassificationModel.setProbabilityCol
       ~RandomForestClassificationModel.setRawPredictionCol
       ~RandomForestClassificationModel.setThresholds
       ~RandomForestClassificationModel.transform
       ~RandomForestClassificationModel.write

    
    

    
    

    .. rubric:: Attributes

    .. autosummary::
    
       ~RandomForestClassificationModel.bootstrap
       ~RandomForestClassificationModel.cacheNodeIds
       ~RandomForestClassificationModel.checkpointInterval
       ~RandomForestClassificationModel.featureImportances
       ~RandomForestClassificationModel.featureSubsetStrategy
       ~RandomForestClassificationModel.featuresCol
       ~RandomForestClassificationModel.getNumTrees
       ~RandomForestClassificationModel.hasSummary
       ~RandomForestClassificationModel.impurity
       ~RandomForestClassificationModel.labelCol
       ~RandomForestClassificationModel.leafCol
       ~RandomForestClassificationModel.maxBins
       ~RandomForestClassificationModel.maxDepth
       ~RandomForestClassificationModel.maxMemoryInMB
       ~RandomForestClassificationModel.minInfoGain
       ~RandomForestClassificationModel.minInstancesPerNode
       ~RandomForestClassificationModel.minWeightFractionPerNode
       ~RandomForestClassificationModel.numClasses
       ~RandomForestClassificationModel.numFeatures
       ~RandomForestClassificationModel.numTrees
       ~RandomForestClassificationModel.params
       ~RandomForestClassificationModel.predictionCol
       ~RandomForestClassificationModel.probabilityCol
       ~RandomForestClassificationModel.rawPredictionCol
       ~RandomForestClassificationModel.seed
       ~RandomForestClassificationModel.subsamplingRate
       ~RandomForestClassificationModel.summary
       ~RandomForestClassificationModel.supportedFeatureSubsetStrategies
       ~RandomForestClassificationModel.supportedImpurities
       ~RandomForestClassificationModel.thresholds
       ~RandomForestClassificationModel.toDebugString
       ~RandomForestClassificationModel.totalNumNodes
       ~RandomForestClassificationModel.treeWeights
       ~RandomForestClassificationModel.trees
       ~RandomForestClassificationModel.weightCol

    
    

    
    

    .. rubric:: Methods Documentation

    
    .. automethod:: clear
    .. automethod:: copy
    .. automethod:: evaluate
    .. automethod:: explainParam
    .. automethod:: explainParams
    .. automethod:: extractParamMap
    .. automethod:: getBootstrap
    .. automethod:: getCacheNodeIds
    .. automethod:: getCheckpointInterval
    .. automethod:: getFeatureSubsetStrategy
    .. automethod:: getFeaturesCol
    .. automethod:: getImpurity
    .. automethod:: getLabelCol
    .. automethod:: getLeafCol
    .. automethod:: getMaxBins
    .. automethod:: getMaxDepth
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
    .. automethod:: getSubsamplingRate
    .. automethod:: getThresholds
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

    
    .. autoattribute:: bootstrap
    .. autoattribute:: cacheNodeIds
    .. autoattribute:: checkpointInterval
    .. autoattribute:: featureImportances
    .. autoattribute:: featureSubsetStrategy
    .. autoattribute:: featuresCol
    .. autoattribute:: getNumTrees
    .. autoattribute:: hasSummary
    .. autoattribute:: impurity
    .. autoattribute:: labelCol
    .. autoattribute:: leafCol
    .. autoattribute:: maxBins
    .. autoattribute:: maxDepth
    .. autoattribute:: maxMemoryInMB
    .. autoattribute:: minInfoGain
    .. autoattribute:: minInstancesPerNode
    .. autoattribute:: minWeightFractionPerNode
    .. autoattribute:: numClasses
    .. autoattribute:: numFeatures
    .. autoattribute:: numTrees
    .. autoattribute:: params
    .. autoattribute:: predictionCol
    .. autoattribute:: probabilityCol
    .. autoattribute:: rawPredictionCol
    .. autoattribute:: seed
    .. autoattribute:: subsamplingRate
    .. autoattribute:: summary
    .. autoattribute:: supportedFeatureSubsetStrategies
    .. autoattribute:: supportedImpurities
    .. autoattribute:: thresholds
    .. autoattribute:: toDebugString
    .. autoattribute:: totalNumNodes
    .. autoattribute:: treeWeights
    .. autoattribute:: trees
    .. autoattribute:: weightCol

    
    
