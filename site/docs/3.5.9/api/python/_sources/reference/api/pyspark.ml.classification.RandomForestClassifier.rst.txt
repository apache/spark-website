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


RandomForestClassifier
================================================

.. currentmodule:: pyspark.ml.classification

.. autoclass:: RandomForestClassifier

    
      
    

    
    

    .. rubric:: Methods

    .. autosummary::
    
       ~RandomForestClassifier.clear
       ~RandomForestClassifier.copy
       ~RandomForestClassifier.explainParam
       ~RandomForestClassifier.explainParams
       ~RandomForestClassifier.extractParamMap
       ~RandomForestClassifier.fit
       ~RandomForestClassifier.fitMultiple
       ~RandomForestClassifier.getBootstrap
       ~RandomForestClassifier.getCacheNodeIds
       ~RandomForestClassifier.getCheckpointInterval
       ~RandomForestClassifier.getFeatureSubsetStrategy
       ~RandomForestClassifier.getFeaturesCol
       ~RandomForestClassifier.getImpurity
       ~RandomForestClassifier.getLabelCol
       ~RandomForestClassifier.getLeafCol
       ~RandomForestClassifier.getMaxBins
       ~RandomForestClassifier.getMaxDepth
       ~RandomForestClassifier.getMaxMemoryInMB
       ~RandomForestClassifier.getMinInfoGain
       ~RandomForestClassifier.getMinInstancesPerNode
       ~RandomForestClassifier.getMinWeightFractionPerNode
       ~RandomForestClassifier.getNumTrees
       ~RandomForestClassifier.getOrDefault
       ~RandomForestClassifier.getParam
       ~RandomForestClassifier.getPredictionCol
       ~RandomForestClassifier.getProbabilityCol
       ~RandomForestClassifier.getRawPredictionCol
       ~RandomForestClassifier.getSeed
       ~RandomForestClassifier.getSubsamplingRate
       ~RandomForestClassifier.getThresholds
       ~RandomForestClassifier.getWeightCol
       ~RandomForestClassifier.hasDefault
       ~RandomForestClassifier.hasParam
       ~RandomForestClassifier.isDefined
       ~RandomForestClassifier.isSet
       ~RandomForestClassifier.load
       ~RandomForestClassifier.read
       ~RandomForestClassifier.save
       ~RandomForestClassifier.set
       ~RandomForestClassifier.setBootstrap
       ~RandomForestClassifier.setCacheNodeIds
       ~RandomForestClassifier.setCheckpointInterval
       ~RandomForestClassifier.setFeatureSubsetStrategy
       ~RandomForestClassifier.setFeaturesCol
       ~RandomForestClassifier.setImpurity
       ~RandomForestClassifier.setLabelCol
       ~RandomForestClassifier.setLeafCol
       ~RandomForestClassifier.setMaxBins
       ~RandomForestClassifier.setMaxDepth
       ~RandomForestClassifier.setMaxMemoryInMB
       ~RandomForestClassifier.setMinInfoGain
       ~RandomForestClassifier.setMinInstancesPerNode
       ~RandomForestClassifier.setMinWeightFractionPerNode
       ~RandomForestClassifier.setNumTrees
       ~RandomForestClassifier.setParams
       ~RandomForestClassifier.setPredictionCol
       ~RandomForestClassifier.setProbabilityCol
       ~RandomForestClassifier.setRawPredictionCol
       ~RandomForestClassifier.setSeed
       ~RandomForestClassifier.setSubsamplingRate
       ~RandomForestClassifier.setThresholds
       ~RandomForestClassifier.setWeightCol
       ~RandomForestClassifier.write

    
    

    
    

    .. rubric:: Attributes

    .. autosummary::
    
       ~RandomForestClassifier.bootstrap
       ~RandomForestClassifier.cacheNodeIds
       ~RandomForestClassifier.checkpointInterval
       ~RandomForestClassifier.featureSubsetStrategy
       ~RandomForestClassifier.featuresCol
       ~RandomForestClassifier.impurity
       ~RandomForestClassifier.labelCol
       ~RandomForestClassifier.leafCol
       ~RandomForestClassifier.maxBins
       ~RandomForestClassifier.maxDepth
       ~RandomForestClassifier.maxMemoryInMB
       ~RandomForestClassifier.minInfoGain
       ~RandomForestClassifier.minInstancesPerNode
       ~RandomForestClassifier.minWeightFractionPerNode
       ~RandomForestClassifier.numTrees
       ~RandomForestClassifier.params
       ~RandomForestClassifier.predictionCol
       ~RandomForestClassifier.probabilityCol
       ~RandomForestClassifier.rawPredictionCol
       ~RandomForestClassifier.seed
       ~RandomForestClassifier.subsamplingRate
       ~RandomForestClassifier.supportedFeatureSubsetStrategies
       ~RandomForestClassifier.supportedImpurities
       ~RandomForestClassifier.thresholds
       ~RandomForestClassifier.weightCol

    
    

    
    

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
    .. automethod:: setProbabilityCol
    .. automethod:: setRawPredictionCol
    .. automethod:: setSeed
    .. automethod:: setSubsamplingRate
    .. automethod:: setThresholds
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
    .. autoattribute:: probabilityCol
    .. autoattribute:: rawPredictionCol
    .. autoattribute:: seed
    .. autoattribute:: subsamplingRate
    .. autoattribute:: supportedFeatureSubsetStrategies
    .. autoattribute:: supportedImpurities
    .. autoattribute:: thresholds
    .. autoattribute:: weightCol

    
    
