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


RandomForestRegressor
===========================================

.. currentmodule:: pyspark.ml.regression

.. autoclass:: RandomForestRegressor

    
      
    

    
    

    .. rubric:: Methods

    .. autosummary::
    
       ~RandomForestRegressor.clear
       ~RandomForestRegressor.copy
       ~RandomForestRegressor.explainParam
       ~RandomForestRegressor.explainParams
       ~RandomForestRegressor.extractParamMap
       ~RandomForestRegressor.fit
       ~RandomForestRegressor.fitMultiple
       ~RandomForestRegressor.getBootstrap
       ~RandomForestRegressor.getCacheNodeIds
       ~RandomForestRegressor.getCheckpointInterval
       ~RandomForestRegressor.getFeatureSubsetStrategy
       ~RandomForestRegressor.getFeaturesCol
       ~RandomForestRegressor.getImpurity
       ~RandomForestRegressor.getLabelCol
       ~RandomForestRegressor.getLeafCol
       ~RandomForestRegressor.getMaxBins
       ~RandomForestRegressor.getMaxDepth
       ~RandomForestRegressor.getMaxMemoryInMB
       ~RandomForestRegressor.getMinInfoGain
       ~RandomForestRegressor.getMinInstancesPerNode
       ~RandomForestRegressor.getMinWeightFractionPerNode
       ~RandomForestRegressor.getNumTrees
       ~RandomForestRegressor.getOrDefault
       ~RandomForestRegressor.getParam
       ~RandomForestRegressor.getPredictionCol
       ~RandomForestRegressor.getSeed
       ~RandomForestRegressor.getSubsamplingRate
       ~RandomForestRegressor.getWeightCol
       ~RandomForestRegressor.hasDefault
       ~RandomForestRegressor.hasParam
       ~RandomForestRegressor.isDefined
       ~RandomForestRegressor.isSet
       ~RandomForestRegressor.load
       ~RandomForestRegressor.read
       ~RandomForestRegressor.save
       ~RandomForestRegressor.set
       ~RandomForestRegressor.setBootstrap
       ~RandomForestRegressor.setCacheNodeIds
       ~RandomForestRegressor.setCheckpointInterval
       ~RandomForestRegressor.setFeatureSubsetStrategy
       ~RandomForestRegressor.setFeaturesCol
       ~RandomForestRegressor.setImpurity
       ~RandomForestRegressor.setLabelCol
       ~RandomForestRegressor.setLeafCol
       ~RandomForestRegressor.setMaxBins
       ~RandomForestRegressor.setMaxDepth
       ~RandomForestRegressor.setMaxMemoryInMB
       ~RandomForestRegressor.setMinInfoGain
       ~RandomForestRegressor.setMinInstancesPerNode
       ~RandomForestRegressor.setMinWeightFractionPerNode
       ~RandomForestRegressor.setNumTrees
       ~RandomForestRegressor.setParams
       ~RandomForestRegressor.setPredictionCol
       ~RandomForestRegressor.setSeed
       ~RandomForestRegressor.setSubsamplingRate
       ~RandomForestRegressor.setWeightCol
       ~RandomForestRegressor.write

    
    

    
    

    .. rubric:: Attributes

    .. autosummary::
    
       ~RandomForestRegressor.bootstrap
       ~RandomForestRegressor.cacheNodeIds
       ~RandomForestRegressor.checkpointInterval
       ~RandomForestRegressor.featureSubsetStrategy
       ~RandomForestRegressor.featuresCol
       ~RandomForestRegressor.impurity
       ~RandomForestRegressor.labelCol
       ~RandomForestRegressor.leafCol
       ~RandomForestRegressor.maxBins
       ~RandomForestRegressor.maxDepth
       ~RandomForestRegressor.maxMemoryInMB
       ~RandomForestRegressor.minInfoGain
       ~RandomForestRegressor.minInstancesPerNode
       ~RandomForestRegressor.minWeightFractionPerNode
       ~RandomForestRegressor.numTrees
       ~RandomForestRegressor.params
       ~RandomForestRegressor.predictionCol
       ~RandomForestRegressor.seed
       ~RandomForestRegressor.subsamplingRate
       ~RandomForestRegressor.supportedFeatureSubsetStrategies
       ~RandomForestRegressor.supportedImpurities
       ~RandomForestRegressor.weightCol

    
    

    
    

    .. rubric:: Methods Documentation

    
    .. automethod:: clear
    .. automethod:: copy
    .. automethod:: explainParam
    .. automethod:: explainParams
    .. automethod:: extractParamMap
    .. automethod:: fit
    .. automethod:: fitMultiple
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
    .. automethod:: getNumTrees
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
    .. automethod:: read
    .. automethod:: save
    .. automethod:: set
    .. automethod:: setBootstrap
    .. automethod:: setCacheNodeIds
    .. automethod:: setCheckpointInterval
    .. automethod:: setFeatureSubsetStrategy
    .. automethod:: setFeaturesCol
    .. automethod:: setImpurity
    .. automethod:: setLabelCol
    .. automethod:: setLeafCol
    .. automethod:: setMaxBins
    .. automethod:: setMaxDepth
    .. automethod:: setMaxMemoryInMB
    .. automethod:: setMinInfoGain
    .. automethod:: setMinInstancesPerNode
    .. automethod:: setMinWeightFractionPerNode
    .. automethod:: setNumTrees
    .. automethod:: setParams
    .. automethod:: setPredictionCol
    .. automethod:: setSeed
    .. automethod:: setSubsamplingRate
    .. automethod:: setWeightCol
    .. automethod:: write

    
    

    
    

    .. rubric:: Attributes Documentation

    
    .. autoattribute:: bootstrap
    .. autoattribute:: cacheNodeIds
    .. autoattribute:: checkpointInterval
    .. autoattribute:: featureSubsetStrategy
    .. autoattribute:: featuresCol
    .. autoattribute:: impurity
    .. autoattribute:: labelCol
    .. autoattribute:: leafCol
    .. autoattribute:: maxBins
    .. autoattribute:: maxDepth
    .. autoattribute:: maxMemoryInMB
    .. autoattribute:: minInfoGain
    .. autoattribute:: minInstancesPerNode
    .. autoattribute:: minWeightFractionPerNode
    .. autoattribute:: numTrees
    .. autoattribute:: params
    .. autoattribute:: predictionCol
    .. autoattribute:: seed
    .. autoattribute:: subsamplingRate
    .. autoattribute:: supportedFeatureSubsetStrategies
    .. autoattribute:: supportedImpurities
    .. autoattribute:: weightCol

    
    
