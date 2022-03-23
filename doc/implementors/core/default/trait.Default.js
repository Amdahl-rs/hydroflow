(function() {var implementors = {};
implementors["hydroflow"] = [{"text":"impl&lt;Hof&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hydroflow/builder/build/pull_handoff/struct.HandoffPullBuild.html\" title=\"struct hydroflow::builder::build::pull_handoff::HandoffPullBuild\">HandoffPullBuild</a>&lt;Hof&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Hof: <a class=\"trait\" href=\"hydroflow/scheduled/handoff/trait.Handoff.html\" title=\"trait hydroflow::scheduled::handoff::Handoff\">Handoff</a>,&nbsp;</span>","synthetic":false,"types":["hydroflow::builder::build::pull_handoff::HandoffPullBuild"]},{"text":"impl&lt;Hof, In&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hydroflow/builder/build/push_handoff/struct.HandoffPushBuild.html\" title=\"struct hydroflow::builder::build::push_handoff::HandoffPushBuild\">HandoffPushBuild</a>&lt;Hof, In&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Hof: <a class=\"trait\" href=\"hydroflow/scheduled/handoff/trait.Handoff.html\" title=\"trait hydroflow::scheduled::handoff::Handoff\">Handoff</a> + <a class=\"trait\" href=\"hydroflow/scheduled/handoff/trait.CanReceive.html\" title=\"trait hydroflow::scheduled::handoff::CanReceive\">CanReceive</a>&lt;In&gt;,&nbsp;</span>","synthetic":false,"types":["hydroflow::builder::build::push_handoff::HandoffPushBuild"]},{"text":"impl&lt;Out&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hydroflow/builder/surface/push_start/struct.StartPushSurface.html\" title=\"struct hydroflow::builder::surface::push_start::StartPushSurface\">StartPushSurface</a>&lt;Out&gt;","synthetic":false,"types":["hydroflow::builder::surface::push_start::StartPushSurface"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hydroflow/builder/prelude/struct.HydroflowBuilder.html\" title=\"struct hydroflow::builder::prelude::HydroflowBuilder\">HydroflowBuilder</a>","synthetic":false,"types":["hydroflow::builder::hydroflow_builder::HydroflowBuilder"]},{"text":"impl&lt;K, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hydroflow/compiled/pull/struct.HalfHashJoinState.html\" title=\"struct hydroflow::compiled::pull::HalfHashJoinState\">HalfHashJoinState</a>&lt;K, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"hydroflow/lang/lattice/trait.LatticeRepr.html\" title=\"trait hydroflow::lang::lattice::LatticeRepr\">LatticeRepr</a>,&nbsp;</span>","synthetic":false,"types":["hydroflow::compiled::pull::HalfHashJoinState"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hydroflow/compiled/pull/struct.BatchJoinState.html\" title=\"struct hydroflow::compiled::pull::BatchJoinState\">BatchJoinState</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"hydroflow/lang/lattice/trait.LatticeRepr.html\" title=\"trait hydroflow::lang::lattice::LatticeRepr\">LatticeRepr</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L::<a class=\"associatedtype\" href=\"hydroflow/lang/lattice/trait.LatticeRepr.html#associatedtype.Repr\" title=\"type hydroflow::lang::lattice::LatticeRepr::Repr\">Repr</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["hydroflow::compiled::pull::BatchJoinState"]},{"text":"impl&lt;K, V1, V2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hydroflow/compiled/pull/struct.JoinState.html\" title=\"struct hydroflow::compiled::pull::JoinState\">JoinState</a>&lt;K, V1, V2&gt;","synthetic":false,"types":["hydroflow::compiled::pull::JoinState"]},{"text":"impl&lt;'a, V1, V2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hydroflow/compiled/pull/struct.CrossJoinState.html\" title=\"struct hydroflow::compiled::pull::CrossJoinState\">CrossJoinState</a>&lt;V1, V2&gt;","synthetic":false,"types":["hydroflow::compiled::pull::CrossJoinState"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hydroflow/compiled/struct.InputBuild.html\" title=\"struct hydroflow::compiled::InputBuild\">InputBuild</a>&lt;T&gt;","synthetic":false,"types":["hydroflow::compiled::InputBuild"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hydroflow/scheduled/graph/struct.Hydroflow.html\" title=\"struct hydroflow::scheduled::graph::Hydroflow\">Hydroflow</a>","synthetic":false,"types":["hydroflow::scheduled::graph::Hydroflow"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hydroflow/scheduled/graph/struct.FlowGraph.html\" title=\"struct hydroflow::scheduled::graph::FlowGraph\">FlowGraph</a>","synthetic":false,"types":["hydroflow::scheduled::graph::FlowGraph"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hydroflow/scheduled/handoff/struct.TeeingHandoff.html\" title=\"struct hydroflow::scheduled::handoff::TeeingHandoff\">TeeingHandoff</a>&lt;T&gt;","synthetic":false,"types":["hydroflow::scheduled::handoff::tee::TeeingHandoff"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hydroflow/scheduled/handoff/struct.VecHandoff.html\" title=\"struct hydroflow::scheduled::handoff::VecHandoff\">VecHandoff</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'static,&nbsp;</span>","synthetic":false,"types":["hydroflow::scheduled::handoff::vector::VecHandoff"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hydroflow/scheduled/input/struct.Buffer.html\" title=\"struct hydroflow::scheduled::input::Buffer\">Buffer</a>&lt;T&gt;","synthetic":false,"types":["hydroflow::scheduled::input::Buffer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hydroflow/scheduled/query/struct.Query.html\" title=\"struct hydroflow::scheduled::query::Query\">Query</a>","synthetic":false,"types":["hydroflow::scheduled::query::Query"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()