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


RandomForestRegressionModel
=================================================

.. currentmodule:: pyspark.ml.regression

.. autoclass:: RandomForestRegressionModel

    
      
    

    
    

    .. rubric:: Methods

    .. autosummary::
    
       ~RandomForestRegressionModel.clear
       ~RandomForestRegressionModel.copy
       ~RandomForestRegressionModel.explainParam
       ~RandomForestRegressionModel.explainParams
       ~RandomForestRegressionModel.extractParamMap
       ~RandomForestRegressionModel.getBootstrap
       ~RandomForestRegressionModel.getCacheNodeIds
       ~RandomForestRegressionModel.getCheckpointInterval
       ~RandomForestRegressionModel.getFeatureSubsetStrategy
       ~RandomForestRegressionModel.getFeaturesCol
       ~RandomForestRegressionModel.getImpurity
       ~RandomForestRegressionModel.getLabelCol
       ~RandomForestRegressionModel.getLeafCol
       ~RandomForestRegressionModel.getMaxBins
       ~RandomForestRegressionModel.getMaxDepth
       ~RandomForestRegressionModel.getMaxMemoryInMB
       ~RandomForestRegressionModel.getMinInfoGain
       ~RandomForestRegressionModel.getMinInstancesPerNode
       ~RandomForestRegressionModel.getMinWeightFractionPerNode
       ~RandomForestRegressionModel.getOrDefault
       ~RandomForestRegressionModel.getParam
       ~RandomForestRegressionModel.getPredictionCol
       ~RandomForestRegressionModel.getSeed
       ~RandomForestRegressionModel.getSubsamplingRate
       ~RandomForestRegressionModel.getWeightCol
       ~RandomForestRegressionModel.hasDefault
       ~RandomForestRegressionModel.hasParam
       ~RandomForestRegressionModel.isDefined
       ~RandomForestRegressionModel.isSet
       ~RandomForestRegressionModel.load
       ~RandomForestRegressionModel.predict
       ~RandomForestRegressionModel.predictLeaf
       ~RandomForestRegressionModel.read
       ~RandomForestRegressionModel.save
       ~RandomForestRegressionModel.set
       ~RandomForestRegressionModel.setFeaturesCol
       ~RandomForestRegressionModel.setLeafCol
       ~RandomForestRegressionModel.setPredictionCol
       ~RandomForestRegressionModel.transform
       ~RandomForestRegressionModel.write

    
    

    
    

    .. rubric:: Attributes

    .. autosummary::
    
       ~RandomForestRegressionModel.bootstrap
       ~RandomForestRegressionModel.cacheNodeIds
       ~RandomForestRegressionModel.checkpointInterval
       ~RandomForestRegressionModel.featureImportances
       ~RandomForestRegressionModel.featureSubsetStrategy
       ~RandomForestRegressionModel.featuresCol
       ~RandomForestRegressionModel.getNumTrees
       ~RandomForestRegressionModel.impurity
       ~RandomForestRegressionModel.labelCol
       ~RandomForestRegressionModel.leafCol
       ~RandomForestRegressionModel.maxBins
       ~RandomForestRegressionModel.maxDepth
       ~RandomForestRegressionModel.maxMemoryInMB
       ~RandomForestRegressionModel.minInfoGain
       ~RandomForestRegressionModel.minInstancesPerNode
       ~RandomForestRegressionModel.minWeightFractionPerNode
       ~RandomForestRegressionModel.numFeatures
       ~RandomForestRegressionModel.numTrees
       ~RandomForestRegressionModel.params
       ~RandomForestRegressionModel.predictionCol
       ~RandomForestRegressionModel.seed
       ~RandomForestRegressionModel.subsamplingRate
       ~RandomForestRegressionModel.supportedFeatureSubsetStrategies
       ~RandomForestRegressionModel.supportedImpurities
       ~RandomForestRegressionModel.toDebugString
       ~RandomForestRegressionModel.totalNumNodes
       ~RandomForestRegressionModel.treeWeights
       ~RandomForestRegressionModel.trees
       ~RandomForestRegressionModel.weightCol

    
    

    
    

    .. rubric:: Methods Documentation

    
    .. automethod:: clear
    .. automethod:: copy
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
    .. automethod:: getSeed
    .. automethod:: getSubsamplingRate
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

    
    .. autoattribute:: bootstrap
    .. autoattribute:: cacheNodeIds
    .. autoattribute:: checkpointInterval
    .. autoattribute:: featureImportances
    .. autoattribute:: featureSubsetStrategy
    .. autoattribute:: featuresCol
    .. autoattribute:: getNumTrees
    .. autoattribute:: impurity
    .. autoattribute:: labelCol
    .. autoattribute:: leafCol
    .. autoattribute:: maxBins
    .. autoattribute:: maxDepth
    .. autoattribute:: maxMemoryInMB
    .. autoattribute:: minInfoGain
    .. autoattribute:: minInstancesPerNode
    .. autoattribute:: minWeightFractionPerNode
    .. autoattribute:: numFeatures
    .. autoattribute:: numTrees
    .. autoattribute:: params
    .. autoattribute:: predictionCol
    .. autoattribute:: seed
    .. autoattribute:: subsamplingRate
    .. autoattribute:: supportedFeatureSubsetStrategies
    .. autoattribute:: supportedImpurities
    .. autoattribute:: toDebugString
    .. autoattribute:: totalNumNodes
    .. autoattribute:: treeWeights
    .. autoattribute:: trees
    .. autoattribute:: weightCol

    
    
