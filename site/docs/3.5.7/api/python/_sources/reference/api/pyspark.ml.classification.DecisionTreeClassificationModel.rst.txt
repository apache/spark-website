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


DecisionTreeClassificationModel
=========================================================

.. currentmodule:: pyspark.ml.classification

.. autoclass:: DecisionTreeClassificationModel

    
      
    

    
    

    .. rubric:: Methods

    .. autosummary::
    
       ~DecisionTreeClassificationModel.clear
       ~DecisionTreeClassificationModel.copy
       ~DecisionTreeClassificationModel.explainParam
       ~DecisionTreeClassificationModel.explainParams
       ~DecisionTreeClassificationModel.extractParamMap
       ~DecisionTreeClassificationModel.getCacheNodeIds
       ~DecisionTreeClassificationModel.getCheckpointInterval
       ~DecisionTreeClassificationModel.getFeaturesCol
       ~DecisionTreeClassificationModel.getImpurity
       ~DecisionTreeClassificationModel.getLabelCol
       ~DecisionTreeClassificationModel.getLeafCol
       ~DecisionTreeClassificationModel.getMaxBins
       ~DecisionTreeClassificationModel.getMaxDepth
       ~DecisionTreeClassificationModel.getMaxMemoryInMB
       ~DecisionTreeClassificationModel.getMinInfoGain
       ~DecisionTreeClassificationModel.getMinInstancesPerNode
       ~DecisionTreeClassificationModel.getMinWeightFractionPerNode
       ~DecisionTreeClassificationModel.getOrDefault
       ~DecisionTreeClassificationModel.getParam
       ~DecisionTreeClassificationModel.getPredictionCol
       ~DecisionTreeClassificationModel.getProbabilityCol
       ~DecisionTreeClassificationModel.getRawPredictionCol
       ~DecisionTreeClassificationModel.getSeed
       ~DecisionTreeClassificationModel.getThresholds
       ~DecisionTreeClassificationModel.getWeightCol
       ~DecisionTreeClassificationModel.hasDefault
       ~DecisionTreeClassificationModel.hasParam
       ~DecisionTreeClassificationModel.isDefined
       ~DecisionTreeClassificationModel.isSet
       ~DecisionTreeClassificationModel.load
       ~DecisionTreeClassificationModel.predict
       ~DecisionTreeClassificationModel.predictLeaf
       ~DecisionTreeClassificationModel.predictProbability
       ~DecisionTreeClassificationModel.predictRaw
       ~DecisionTreeClassificationModel.read
       ~DecisionTreeClassificationModel.save
       ~DecisionTreeClassificationModel.set
       ~DecisionTreeClassificationModel.setFeaturesCol
       ~DecisionTreeClassificationModel.setLeafCol
       ~DecisionTreeClassificationModel.setPredictionCol
       ~DecisionTreeClassificationModel.setProbabilityCol
       ~DecisionTreeClassificationModel.setRawPredictionCol
       ~DecisionTreeClassificationModel.setThresholds
       ~DecisionTreeClassificationModel.transform
       ~DecisionTreeClassificationModel.write

    
    

    
    

    .. rubric:: Attributes

    .. autosummary::
    
       ~DecisionTreeClassificationModel.cacheNodeIds
       ~DecisionTreeClassificationModel.checkpointInterval
       ~DecisionTreeClassificationModel.depth
       ~DecisionTreeClassificationModel.featureImportances
       ~DecisionTreeClassificationModel.featuresCol
       ~DecisionTreeClassificationModel.impurity
       ~DecisionTreeClassificationModel.labelCol
       ~DecisionTreeClassificationModel.leafCol
       ~DecisionTreeClassificationModel.maxBins
       ~DecisionTreeClassificationModel.maxDepth
       ~DecisionTreeClassificationModel.maxMemoryInMB
       ~DecisionTreeClassificationModel.minInfoGain
       ~DecisionTreeClassificationModel.minInstancesPerNode
       ~DecisionTreeClassificationModel.minWeightFractionPerNode
       ~DecisionTreeClassificationModel.numClasses
       ~DecisionTreeClassificationModel.numFeatures
       ~DecisionTreeClassificationModel.numNodes
       ~DecisionTreeClassificationModel.params
       ~DecisionTreeClassificationModel.predictionCol
       ~DecisionTreeClassificationModel.probabilityCol
       ~DecisionTreeClassificationModel.rawPredictionCol
       ~DecisionTreeClassificationModel.seed
       ~DecisionTreeClassificationModel.supportedImpurities
       ~DecisionTreeClassificationModel.thresholds
       ~DecisionTreeClassificationModel.toDebugString
       ~DecisionTreeClassificationModel.weightCol

    
    

    
    

    .. rubric:: Methods Documentation

    
    .. automethod:: clear
    .. automethod:: copy
    .. automethod:: explainParam
    .. automethod:: explainParams
    .. automethod:: extractParamMap
    .. automethod:: getCacheNodeIds
    .. automethod:: getCheckpointInterval
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

    
    .. autoattribute:: cacheNodeIds
    .. autoattribute:: checkpointInterval
    .. autoattribute:: depth
    .. autoattribute:: featureImportances
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
    .. autoattribute:: numClasses
    .. autoattribute:: numFeatures
    .. autoattribute:: numNodes
    .. autoattribute:: params
    .. autoattribute:: predictionCol
    .. autoattribute:: probabilityCol
    .. autoattribute:: rawPredictionCol
    .. autoattribute:: seed
    .. autoattribute:: supportedImpurities
    .. autoattribute:: thresholds
    .. autoattribute:: toDebugString
    .. autoattribute:: weightCol

    
    
