window.SIDEBAR_ITEMS = {"enum":[["BlockErrorKind",""],["CollectionErrorType",""],["DigestError",""],["HeaderBuilderError","Error type for HeaderBuilder"],["PrimaryMessage",""],["ReconfigureNotification","Message to reconfigure worker tasks. This message must be sent by a trusted source."],["RetrievalResult",""]],"fn":[["now",""],["serialized_batch_digest","Hashes a serialized batch message without deserializing it into a batch."]],"macro":[["bail",""],["ensure",""]],"mod":[["error",""],["metered_channel",""]],"struct":[["Batch",""],["BatchDigest",""],["BatchMessage",""],["BlockError",""],["Certificate",""],["CertificateDigest",""],["CertificateDigestProto",""],["Collection",""],["CollectionError",""],["CollectionRetrievalResult",""],["CommittedSubDag",""],["CommittedSubDagShell",""],["ConditionalBroadcastReceiver",""],["ConfigurationClient",""],["ConfigurationServer",""],["ConsensusOutput","The output of Consensus, which includes all the batches for each certificate in the sub dag It is sent to the the ExecutionState handle_consensus_transactions"],["ConsensusStore","The persistent storage of the sequencer."],["Empty","Empty message for when we don’t have anything to return"],["FetchCertificatesRequest","Used by the primary to fetch certificates from other primaries."],["FetchCertificatesResponse","Used by the primary to reply to FetchCertificatesRequest."],["GetCertificatesRequest","Used by the primary to get specific certificates from other primaries."],["GetCertificatesResponse","Used by the primary to reply to GetCertificatesRequest."],["GetCollectionsRequest",""],["GetCollectionsResponse",""],["GetPrimaryAddressResponse",""],["Header",""],["HeaderBuilder","Builder for `Header`."],["HeaderDigest",""],["Metadata",""],["MockPrimaryToPrimary","Generated trait containing RPC methods that should be implemented for use with PrimaryToPrimaryServer."],["MockPrimaryToWorker","Generated trait containing RPC methods that should be implemented for use with PrimaryToWorkerServer."],["MockWorkerToPrimary","Generated trait containing RPC methods that should be implemented for use with WorkerToPrimaryServer."],["MockWorkerToWorker","Generated trait containing RPC methods that should be implemented for use with WorkerToWorkerServer."],["MultiAddrProto",""],["NewEpochRequest",""],["NewNetworkInfoRequest",""],["NodeReadCausalRequest",""],["NodeReadCausalResponse",""],["PayloadAvailabilityRequest",""],["PayloadAvailabilityResponse",""],["PreSubscribedBroadcastSender","PreSubscribedBroadcastSender is a wrapped Broadcast channel that limits subscription to initialization time. This is designed to be used for cancellation signal to all the components, and the limitation is intended to prevent a component missing the shutdown signal due to a subscription that happens after the shutdown signal was sent. The receivers have a special peek method which can be used to conditionally check for shutdown signal on the channel."],["PrimaryToPrimaryClient",""],["PrimaryToPrimaryServer",""],["PrimaryToWorkerClient",""],["PrimaryToWorkerServer",""],["ProposerClient","/ The API that hosts the endpoints that should be used to help / proposing a block."],["ProposerServer","/ The API that hosts the endpoints that should be used to help / proposing a block."],["PublicKeyProto",""],["ReadCausalRequest",""],["ReadCausalResponse",""],["RemoveCollectionsRequest",""],["RequestBatchRequest","Used by primary to ask worker for the request."],["RequestBatchResponse",""],["RequestVoteRequest","Used by the primary to request a vote from other primaries on newly produced headers."],["RequestVoteResponse","Used by the primary to reply to RequestVoteRequest."],["RoundsRequest",""],["RoundsResponse",""],["TransactionProto",""],["TransactionsClient",""],["TransactionsServer",""],["ValidatorClient","The consensus to mempool interface for validator actions."],["ValidatorData",""],["ValidatorServer","The consensus to mempool interface for validator actions."],["Vote",""],["VoteDigest",""],["VoteInfo",""],["WorkerBatchMessage","Used by workers to send a new batch."],["WorkerDeleteBatchesMessage","Used by the primary to request that the worker delete the specified batches."],["WorkerInfoResponse",""],["WorkerOthersBatchMessage","Used by worker to inform primary it received a batch from another authority."],["WorkerOurBatchMessage","Used by worker to inform primary it sealed a new batch."],["WorkerReconfigureMessage","Used by the primary to reconfigure the worker."],["WorkerSynchronizeMessage","Used by the primary to request that the worker sync the target missing batches."],["WorkerToPrimaryClient",""],["WorkerToPrimaryServer",""],["WorkerToWorkerClient",""],["WorkerToWorkerServer",""]],"trait":[["Configuration","Generated trait containing gRPC methods that should be implemented for use with ConfigurationServer."],["PrimaryToPrimary","Generated trait containing RPC methods that should be implemented for use with PrimaryToPrimaryServer."],["PrimaryToWorker","Generated trait containing RPC methods that should be implemented for use with PrimaryToWorkerServer."],["Proposer","Generated trait containing gRPC methods that should be implemented for use with ProposerServer."],["Timestamp",""],["Transactions","Generated trait containing gRPC methods that should be implemented for use with TransactionsServer."],["Validator","Generated trait containing gRPC methods that should be implemented for use with ValidatorServer."],["WorkerToPrimary","Generated trait containing RPC methods that should be implemented for use with WorkerToPrimaryServer."],["WorkerToWorker","Generated trait containing RPC methods that should be implemented for use with WorkerToWorkerServer."]],"type":[["BlockResult",""],["PrimaryResponse",""],["Round","The round number."],["SequenceNumber","A global sequence number assigned to every CommittedSubDag."],["ShutdownToken","Shutdown token dropped when a task is properly shut down."],["StoreResult","Convenience type to propagate store errors."],["TimestampMs","The epoch UNIX timestamp in milliseconds"],["Transaction",""],["TxResponse",""]]};